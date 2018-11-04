package com.rongshu.houseweb.controller;

import com.baomidou.mybatisplus.core.conditions.Condition;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.google.common.base.Preconditions;
import com.google.common.collect.Ordering;
import com.rongshu.houseweb.entity.NewHouseInfo;
import com.rongshu.houseweb.entity.NewHousePicAndDescVo;
import com.rongshu.houseweb.entity.NewHouseTypeVO;
import com.rongshu.houseweb.entity.UserRequire;
import com.rongshu.houseweb.service.NewHouseService;
import com.rongshu.houseweb.service.UserRequireService;
import com.rongshu.houseweb.vo.EasyUIResult;
import com.rongshu.houseweb.vo.SysResult;
import com.rongshu.houseweb.vo.UserRequireCollectVo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.NumberFormat;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
@RequestMapping("/newHouse")
@Validated
public class NewHouseController {

    @Autowired
    private NewHouseService newHouseService;

    private static final Logger logger = LoggerFactory.getLogger(NewHouseController.class);

    @GetMapping("/add")
    public String add() {
        return "newHouse/add";
    }

    @GetMapping("/list")
    public String list() {
        return "newHouse/list";
    }

    @GetMapping("/edit")
    public String edit(Long id) {
        return "newHouse/edit";
    }

    /**
     * 保存楼盘数据
     *
     * @param newHouseInfo 楼盘信息
     * @return {@link SysResult}
     */
    @PostMapping("/save")
    public @ResponseBody
    SysResult save(@Validated NewHouseInfo newHouseInfo) {
        // ajax不抛出异常，记录错误信息，前台js去根据返回值判断提示成功还是失败！
        newHouseInfo.setHiStatus(1);
        if (newHouseService.save(newHouseInfo)) {
            return SysResult.ok();
        }
        String msg = "新增错误：";
        // 出错一定要输出，保存日志文件中
        logger.debug(msg);
        return SysResult.build(201, msg);
    }


    /**
     * 访问：/newHouse/query
     * EasyUI.datagrid 组件封装当前页page，每页条数rows
     *
     * @param page 页数
     * @param rows 每页显示的书面
     * @return 返回要的内容
     */
    @GetMapping("query")
    public @ResponseBody
    EasyUIResult query(Integer page, Integer rows) {

        // 只是开启进行拦截标识，规范：只拦截这个标识下的第一条查询语句
        PageHelper.startPage(page, rows);

        List<NewHouseInfo> newHouseInfoList = newHouseService.list(Condition
                .<NewHouseInfo>lambda().orderByDesc(
                        NewHouseInfo::getHiUpdateDate
                ));
        // 同PageInfo对象来封装两个结果，记录总数，当前页的记录；Page支持线程安全
        // 真正的执行者
        PageInfo<NewHouseInfo> pageInfo = new PageInfo<>(newHouseInfoList);

        return new EasyUIResult(pageInfo.getTotal(), pageInfo.getList());
    }

    /**
     * 楼盘批量删除 /newHouse/delete
     */
    @RequestMapping("/delete")
    public @ResponseBody
    SysResult deleteHouse(Long[] ids) {
        if (ids == null) {
            return SysResult.build(201, "删除对象为null");
        }

        List<Long> idList = Arrays.asList(ids);

        // 根据id查询数据,在进行更新
        Collection<NewHouseInfo> newHouseInfoList = newHouseService.listByIds(idList);

        newHouseInfoList.forEach(newHouseInfo -> {
            newHouseInfo.setHiStatus(3);
        });

        // 批量删除
        boolean result = newHouseService.updateBatchById(newHouseInfoList, 20);

        if (result)
            return SysResult.ok();
        else
            return SysResult.build(201, "批量删除失败.");

    }


    /**
     * 楼盘修改 /newHouse/update
     */

    @RequestMapping("/update")
    @ResponseBody
    public SysResult updateNewHouse(NewHouseInfo newHouseInfo) {
        boolean result = newHouseService.updateById(newHouseInfo);
        if (result) {
            return SysResult.ok();
        } else {
            return SysResult.build(201, "更新失败...");
        }
    }

    /**
     * 楼盘上架
     *
     * @return
     */
    @PostMapping("reshelf")
    public @ResponseBody
    SysResult reshelf(Long[] ids) {
        if (ids == null) {
            return SysResult.build(201, "上架对象为null");
        }
        List<Long> idList = Arrays.asList(ids);

        // 根据id查询数据,在进行更新
        Collection<NewHouseInfo> newHouseInfoList = newHouseService.listByIds(idList);

        newHouseInfoList.forEach(newHouseInfo -> {
            newHouseInfo.setHiStatus(1);
        });

        // 批量下架
        boolean result = newHouseService.updateBatchById(newHouseInfoList, 20);

        if (result)
            return SysResult.ok();
        else
            return SysResult.build(201, "批量上架失败.");

    }

    /**
     * 楼盘下架
     *
     * @return
     */
    @PostMapping("instock")
    public @ResponseBody
    SysResult instock(Long[] ids) {
        if (ids == null) {
            return SysResult.build(201, "下架对象为null");
        }
        List<Long> idList = Arrays.asList(ids);

        // 根据id查询数据,在进行更新
        Collection<NewHouseInfo> newHouseInfoList = newHouseService.listByIds(idList);

        newHouseInfoList.forEach(newHouseInfo -> {
            newHouseInfo.setHiStatus(2);
        });

        // 批量下架
        boolean result = newHouseService.updateBatchById(newHouseInfoList, 20);

        if (result)
            return SysResult.ok();
        else
            return SysResult.build(201, "批量下架失败.");

    }


    /**
     * 通过id查询楼盘
     *
     * @param id 要查询的楼盘id
     * @return 楼盘信息封装对象
     */
    @GetMapping("queryById")
    public @ResponseBody
    SysResult queryById(@NumberFormat Long id) {
        try {
            // 1. 获取NewHouse
            NewHouseInfo newHouseInfo = newHouseService.getById(id);

            Preconditions.checkNotNull(newHouseInfo);

            NewHouseTypeVO newHouseTypeVO = new NewHouseTypeVO();
            newHouseTypeVO.setId(newHouseInfo.getId());
            newHouseTypeVO.setHiName(newHouseInfo.getHiName());
            newHouseTypeVO.setHiLogo(newHouseInfo.getHiLogo());
            newHouseTypeVO.setHiIntervalPic(newHouseInfo.getHiIntervalPic());
            newHouseTypeVO.setHiHotLine(newHouseInfo.getHiHotLine());
            newHouseTypeVO.setQrCode(newHouseInfo.getHiQrCode());

            List<NewHousePicAndDescVo> list = new LinkedList<>();

            // * 0 项目优势
            String hiSuperiorityPic = newHouseInfo.getHiSuperiorityPic();
            String hiSuperiorityDesc = newHouseInfo.getHiSuperiorityDesc();
            String[] hiSuperiorityPicArr = hiSuperiorityPic.split(",");
            String[] hiSuperiorityDescArr = hiSuperiorityDesc.split("\\|\\|");
            for (int i = 0; i < hiSuperiorityPicArr.length; i++) {
                NewHousePicAndDescVo housePicAndDescVo = new NewHousePicAndDescVo();
                housePicAndDescVo.setType(0);
                housePicAndDescVo.setTitle("项目优势");
                housePicAndDescVo.setUrl(hiSuperiorityPicArr[i]);
                if (i < hiSuperiorityDescArr.length) {
                    housePicAndDescVo.setTips(hiSuperiorityDescArr[i]);
                }
                list.add(housePicAndDescVo);
            }


            // * 1 周边环境
            String hiSurroundingEnviromentPic = newHouseInfo.getHiSurroundingEnviromentPic();
            String hiSurroundingEnviromentDesc = newHouseInfo.getHiSurroundingEnviromentDesc();
            String[] hiSurroundingEnviromentPicArr = hiSurroundingEnviromentPic.split(",");
            String[] hiSurroundingEnviromentDescArr = hiSurroundingEnviromentDesc.split("\\|\\|");
            for (int i = 0; i < hiSurroundingEnviromentPicArr.length; i++) {
                NewHousePicAndDescVo housePicAndDescVo = new NewHousePicAndDescVo();
                housePicAndDescVo.setType(1);
                housePicAndDescVo.setTitle("周边环境");
                housePicAndDescVo.setUrl(hiSurroundingEnviromentPicArr[i]);
                if (i < hiSurroundingEnviromentDescArr.length) {
                    housePicAndDescVo.setTips(hiSurroundingEnviromentDescArr[i]);
                }
                list.add(housePicAndDescVo);
            }


            // * 2 交通规划
            String hiTrafficProgrammePic = newHouseInfo.getHiTrafficProgrammePic();
            String hiTrafficProgrammeDesc = newHouseInfo.getHiTrafficProgrammeDesc();
            String[] hiTrafficProgrammePicArr = hiTrafficProgrammePic.split(",");
            String[] hiTrafficProgrammeDescArr = hiTrafficProgrammeDesc.split("\\|\\|");
            for (int i = 0; i < hiTrafficProgrammePicArr.length; i++) {
                NewHousePicAndDescVo housePicAndDescVo = new NewHousePicAndDescVo();
                housePicAndDescVo.setType(2);
                housePicAndDescVo.setTitle("交通规划");
                housePicAndDescVo.setUrl(hiTrafficProgrammePicArr[i]);
                if (i < hiTrafficProgrammeDescArr.length) {
                    housePicAndDescVo.setTips(hiTrafficProgrammeDescArr[i]);
                }
                list.add(housePicAndDescVo);
            }


            // * 3 样板户型
            String hiExampleHouseTypePic = newHouseInfo.getHiExampleHouseTypePic();
            String hiExampleHouseTypeDesc = newHouseInfo.getHiExampleHouseTypeDesc();
            String[] hiExampleHouseTypePicArr = hiExampleHouseTypePic.split(",");
            String[] hiExampleHouseTypeDescArr = hiExampleHouseTypeDesc.split("\\|\\|");
            for (int i = 0; i < hiExampleHouseTypePicArr.length; i++) {
                NewHousePicAndDescVo housePicAndDescVo = new NewHousePicAndDescVo();
                housePicAndDescVo.setType(3);
                housePicAndDescVo.setTitle("样板户型");
                housePicAndDescVo.setUrl(hiExampleHouseTypePicArr[i]);
                if (i < hiExampleHouseTypeDescArr.length) {
                    housePicAndDescVo.setTips(hiExampleHouseTypeDescArr[i]);
                }
                list.add(housePicAndDescVo);
            }


            // * 4 投资潜力
            String hiInvestmentPotentialLogo = newHouseInfo.getHiInvestmentPotentialLogo();
            String hiInvestmentPotentialTitle = newHouseInfo.getHiInvestmentPotentialTitle();
            String hiInvestmentPotentialDesc = newHouseInfo.getHiInvestmentPotentialDesc();
            String[] hiInvestmentPotentialLogoArr = hiInvestmentPotentialLogo.split(",");
            String[] hiInvestmentPotentialTitleArr = hiInvestmentPotentialTitle.split("\\|\\|");
            String[] hiInvestmentPotentialDescArr = hiInvestmentPotentialDesc.split("\\|\\|");
            for (int i = 0; i < hiInvestmentPotentialTitleArr.length; i++) {
                NewHousePicAndDescVo housePicAndDescVo = new NewHousePicAndDescVo();
                housePicAndDescVo.setType(4);
                housePicAndDescVo.setTitle("投资潜力");
                housePicAndDescVo.setTips(hiInvestmentPotentialTitleArr[i]);
                if (i < hiInvestmentPotentialLogoArr.length) {
                    housePicAndDescVo.setUrl(hiInvestmentPotentialLogoArr[i]);
                }
                if (i < hiInvestmentPotentialDescArr.length) {
                    housePicAndDescVo.setDesc(hiInvestmentPotentialDescArr[i]);
                }
                list.add(housePicAndDescVo);
            }

            // 设置详情
            newHouseTypeVO.setDetail(list);
            return SysResult.build(200, "查询成功", newHouseTypeVO);
        } catch (Exception e) {
            logger.debug(e.getMessage());
            return SysResult.build(201, e.getMessage());
        }
    }


    /**
     * 访问：/newHouse/findAll
     * EasyUI.datagrid 组件封装当前页page，每页条数rows
     * 查询出正常上架的楼盘
     *
     * @return 返回要的内容
     */
    @GetMapping("findAll")
    public @ResponseBody
    EasyUIResult findAll() {
        List<NewHouseInfo> newHouseInfoList = newHouseService.list(Condition.<NewHouseInfo>lambda()
                .eq(NewHouseInfo::getHiStatus, 1));

        // 同PageInfo对象来封装两个结果，记录总数，当前页的记录；Page支持线程安全
        // 真正的执行者
        PageInfo<NewHouseInfo> pageInfo = new PageInfo<>(newHouseInfoList);

        return new EasyUIResult(pageInfo.getTotal(), pageInfo.getList());
    }







}
