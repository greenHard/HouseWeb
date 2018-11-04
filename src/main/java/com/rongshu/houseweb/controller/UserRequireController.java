package com.rongshu.houseweb.controller;

import com.baomidou.mybatisplus.core.conditions.Condition;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.google.common.base.Preconditions;
import com.rongshu.houseweb.entity.NewHouseInfo;
import com.rongshu.houseweb.entity.UserRequire;
import com.rongshu.houseweb.service.NewHouseService;
import com.rongshu.houseweb.service.UserRequireService;
import com.rongshu.houseweb.vo.EasyUIResult;
import com.rongshu.houseweb.vo.SysResult;
import com.rongshu.houseweb.vo.UserRequireCollectVo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/userRequire")
public class UserRequireController {

    private static final Logger logger = LoggerFactory.getLogger(UserRequireController.class);

    @Autowired
    private UserRequireService userRequireService;

    @Autowired
    private NewHouseService newHouseService;

    //@GetMapping("/add")
    //public String add() {
    //    return "userRequire/add";
    //}

    @GetMapping("/list")
    public String list() {
        return "userRequire/list";
    }

    //@GetMapping("/edit")
    //public String edit(Long id) {
    //    return "userRequire/edit";
    //}


    /**
     * 访问：/userRequire/query
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

        List<UserRequire> userRequireList = userRequireService.list(Condition
                .<UserRequire>lambda().orderByDesc(
                        UserRequire::getHiUpdateDate
                ));
        // 同PageInfo对象来封装两个结果，记录总数，当前页的记录；Page支持线程安全
        // 真正的执行者
        PageInfo<UserRequire> pageInfo = new PageInfo<>(userRequireList);

        return new EasyUIResult(pageInfo.getTotal(), pageInfo.getList());
    }

    /**
     * 访问：/userRequire/findAll
     * EasyUI.datagrid 组件封装当前页page，每页条数rows
     *
     * @param page 页数
     * @param rows 每页显示的书面
     * @return 返回要的内容
     */
    @GetMapping("findAll")
    public @ResponseBody
    EasyUIResult findAll(Integer page, Integer rows) {

        // 只是开启进行拦截标识，规范：只拦截这个标识下的第一条查询语句
        PageHelper.startPage(page, rows);

        List<UserRequire> userRequireList = userRequireService.list(Condition
                .<UserRequire>lambda().orderByDesc(
                        UserRequire::getHiUpdateDate
                ));
        // 同PageInfo对象来封装两个结果，记录总数，当前页的记录；Page支持线程安全
        // 真正的执行者
        PageInfo<UserRequire> pageInfo = new PageInfo<>(userRequireList);

        return new EasyUIResult(pageInfo.getTotal(), pageInfo.getList());
    }


    /**
     * 用户信息收集
     *
     * @return 成功或者失败
     */
    @PostMapping("/collectUserRequire")
    public @ResponseBody
    SysResult collectUserRequire(@RequestBody UserRequireCollectVo userRequireCollectVo) {

        try {
            logger.info("开始获取楼盘信息: " + userRequireCollectVo);
            Preconditions.checkNotNull(userRequireCollectVo);
            // 获取楼盘信息id
            Long id = userRequireCollectVo.getId();
            NewHouseInfo newHouseInfo = newHouseService.getById(id);
            UserRequire userRequire = new UserRequire();
            userRequire.setMobileNumber(userRequireCollectVo.getMobileNumber());
            userRequire.setHiRequireHouseType(userRequireCollectVo.getRequireHouseType());
            if (newHouseInfo != null) {
                userRequire.setHiFromHouseName(newHouseInfo.getHiName());
            }

            boolean result = userRequireService.save(userRequire);

            if (result) {
                return SysResult.ok();
            } else {
                return SysResult.build(201, "保存失败");
            }

        } catch (Exception e) {
            logger.error(e.getMessage() + "收集信息失败");
            return SysResult.build(201, e.getMessage());
        }
    }
}
