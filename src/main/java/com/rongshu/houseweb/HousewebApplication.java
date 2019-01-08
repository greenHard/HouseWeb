package com.rongshu.houseweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/** 
 * 启动类
 * @author yuyang.zhang 
 * @date 2018/12/20 
 */ 
@SpringBootApplication
public class HousewebApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(HousewebApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(HousewebApplication.class);
    }
}
