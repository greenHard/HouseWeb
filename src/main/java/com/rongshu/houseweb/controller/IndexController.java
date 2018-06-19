package com.rongshu.houseweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author zhang yuyang
 * @ClassName: com.rongshu.houseweb.controller.IndexController
 * @Description: 首页控制器
 * @create 2018/05/30 10:47
 */

@Controller
@RequestMapping("index")
public class IndexController {

    @GetMapping("/home")
    public String home() {
        return "home";
    }
}
