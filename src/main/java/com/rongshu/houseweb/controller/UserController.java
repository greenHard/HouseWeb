
package com.rongshu.houseweb.controller;

import com.rongshu.houseweb.entity.User;
import com.rongshu.houseweb.service.UserService;
import com.rongshu.houseweb.util.MD5Util;
import com.rongshu.houseweb.vo.SysResult;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author zhang yuyang
 * @ClassName: com.rongshu.houseweb.controller.UserController
 * @Description: 用户控制器
 * @create 2018/05/30 10:08
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    //@GetMapping("/login2")
    //public String login2() {
    //    return "login2";
    //}
    //
    //@PostMapping("/doLogin")
    //public String doLogin(String userName, String password, Model model, HttpServletRequest request) {
    //    if (StringUtils.isBlank(userName) || StringUtils.isBlank(password)) {
    //        // 输入的数据为空
    //        model.addAttribute("errorInfo", "用户名或密码不能为空");
    //        return "login";
    //    }
    //
    //    // 根据用户名和密码查询数据库
    //    User user = userService.findUserByUserNameAndPassword(userName, MD5Util.getMd5Hash(userName, password));
    //
    //    request.getSession().setAttribute("user", user);
    //
    //    if (null == user) {
    //        // 用户名密码错误
    //        model.addAttribute("errorInfo", "用户名密码错误");
    //        return "login";
    //    }
    //
    //    return "redirect:/index/home";
    //}

    @PostMapping("/doLogin")
    @ResponseBody
    public SysResult doLogin(String userName, String password, HttpServletRequest request) {
        if (StringUtils.isBlank(userName) || StringUtils.isBlank(password)) {
            return SysResult.build(201, "用户名或密码错误");
        }
        // 根据用户名和密码查询数据库
        User user = userService.findUserByUserNameAndPassword(userName, MD5Util.getMd5Hash(userName, password));
        request.getSession().setAttribute("user", user);
        if (null == user) {
            return SysResult.build(201, "用户名或密码错误");
        }
        return SysResult.ok();
    }


}
