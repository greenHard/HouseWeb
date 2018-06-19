package com.rongshu.houseweb.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.rongshu.houseweb.entity.HouseInfo;
import com.rongshu.houseweb.service.HouseService;
import com.rongshu.houseweb.vo.EasyUIResult;
import com.rongshu.houseweb.vo.SysResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.NumberFormat;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author zhang yuyang
 * @ClassName: com.rongshu.houseweb.controller.HouseController
 * @Description: 页面跳转控制层
 * @create 2018/05/30 13:19
 */
@Controller
@RequestMapping("house")
@Validated
public class HouseController {

    @Autowired
    private HouseService houseService;

    private static final Logger logger = LoggerFactory.getLogger(HouseController.class);

    @GetMapping("/add")
    public String add() {
        return "house/add";
    }

    @GetMapping("/list")
    public String list() {
        return "house/list";
    }

    @GetMapping("/edit")
    public String edit(Long id) {
        return "house/edit";
    }

    /**
     * 保存楼盘数据
     *
     * @param houseInfo 楼盘信息
     * @return {@link SysResult}
     */
    @PostMapping("/save")
    public @ResponseBody
    SysResult save(@Validated HouseInfo houseInfo) {
        logger.info("1>>>>>开始存储楼盘信息数据，houseInfo:" + houseInfo);
        // ajax不抛出异常，记录错误信息，前台js去根据返回值判断提示成功还是失败！
        try {
            // 1.存储信息
            houseService.save(houseInfo);
            logger.info("1>>>>>楼盘信息数据存储成功!");
            return SysResult.ok();
        } catch (Exception e) {
            logger.info("1>>>>>楼盘信息数据存储失败!", e);
            String msg = "新增错误：" + e.getMessage();
            // 出错一定要输出，保存日志文件中
            logger.error(msg);
            return SysResult.build(201, msg);
        }
    }


    /**
     * 访问：/house/query
     * EasyUI.datagrid 组件封装当前页page，每页条数rows
     *
     * @param page 页数
     * @param rows 每页显示的书面
     * @return 返回要的内容
     */
    @GetMapping("query")
    public @ResponseBody
    EasyUIResult query(Integer page, Integer rows) {
        logger.info("2>>>>>进入分页查询楼盘清单，查询页数,page:" + page + ",总行数rows:" + rows);
        // 只是开启进行拦截标识，规范：只拦截这个标识下的第一条查询语句
        PageHelper.startPage(page, rows);

        List<HouseInfo> houseInfoList = houseService.queryHouseList();

        // 同PageInfo对象来封装两个结果，记录总数，当前页的记录；Page支持线程安全
        // 真正的执行者
        PageInfo<HouseInfo> pageInfo = new PageInfo<HouseInfo>(houseInfoList);

        logger.info("2>>>>>查询楼盘清单为" + pageInfo);

        return new EasyUIResult(pageInfo.getTotal(), pageInfo.getList());
    }

    /**
     * 楼盘批量删除 /house/delete
     */
    @RequestMapping("/delete")
    public @ResponseBody
    SysResult deleteHouse(Long[] ids) {
        logger.info("3>>>>>批量删除楼盘清单，要删除的ids:" + ids);
        if (ids == null) {
            return SysResult.build(201, "删除对象为null");
        }

        try {
            houseService.deleteHouse(ids);
            logger.info("3>>>>>批量删除楼盘清单成功");
            return SysResult.ok();
        } catch (Exception e) {
            logger.info("3>>>>>批量删除楼盘清单失败", e);
            logger.error(e.getMessage());
            return SysResult.build(201, e.getMessage());
        }
    }


    /**
     * 楼盘修改 /house/update
     */

    @RequestMapping("/update")
    @ResponseBody
    public SysResult updateHouse(HouseInfo houseInfo) {
        logger.info("4>>>>>更新楼盘信息，要更新的楼盘信息为:" + houseInfo);
        try {
            houseService.updateHouseInfo(houseInfo);
            logger.info("4>>>>>要更新的楼盘信息为成功");
            return SysResult.ok();
        } catch (Exception e) {
            logger.info("4>>>>>要更新的楼盘信息失败", e);
            logger.error(e.getMessage());
            return SysResult.build(201, e.getMessage());
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

        try {
            houseService.reshelfHouse(ids);
            return SysResult.ok();
        } catch (Exception e) {
            logger.debug(e.getMessage());
            return SysResult.build(201, e.getMessage());
        }
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

        try {
            houseService.instockHouse(ids);
            return SysResult.ok();
        } catch (Exception e) {
            logger.debug(e.getMessage());
            return SysResult.build(201, e.getMessage());
        }
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
        logger.info("5>>>>>查询楼盘信息，要查询的id为:" + id);
        try {
            HouseInfo houseInfo = houseService.queryHouseById(id);
            logger.info("5>>>>>查询楼盘信息成功，楼盘信息为:" + houseInfo);
            return SysResult.build(200, "查询成功", houseInfo);
        } catch (Exception e) {
            logger.info("5>>>>>查询楼盘信息失败", e);
            logger.error(e.getMessage());
            return SysResult.build(201, e.getMessage());
        }
    }


    /**
     * 访问：/house/findAll
     * EasyUI.datagrid 组件封装当前页page，每页条数rows
     * 查询出正常上架的楼盘
     *
     * @return 返回要的内容
     */
    @GetMapping("findAll")
    public @ResponseBody
    EasyUIResult findAll() {
        logger.info("6>>>>>开始查询所有楼盘信息");
        List<HouseInfo> houseInfoList = houseService.queryHouseListByStatus();

        // 同PageInfo对象来封装两个结果，记录总数，当前页的记录；Page支持线程安全
        // 真正的执行者
        PageInfo<HouseInfo> pageInfo = new PageInfo<HouseInfo>(houseInfoList);
        logger.info("6>>>>>查询所有楼盘信息成功，houseInfoList:" + houseInfoList);
        return new EasyUIResult(pageInfo.getTotal(), pageInfo.getList());
    }
}
