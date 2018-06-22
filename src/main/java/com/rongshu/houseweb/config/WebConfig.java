package com.rongshu.houseweb.config;

import com.rongshu.houseweb.interceptor.LoginInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.ResourceUtils;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * @author zhang yuyang
 * @ClassName: com.rongshu.houseweb.config.WebConfig
 * @Description: web拦截器的一些配置
 * @create 2018/05/30 10:42
 */
@Configuration
@EnableWebMvc
public class WebConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**").addResourceLocations(ResourceUtils.CLASSPATH_URL_PREFIX+"/static/");
        registry.addResourceHandler("/templates/**").addResourceLocations(ResourceUtils.CLASSPATH_URL_PREFIX+"/templates/");

        super.addResourceHandlers(registry);
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 拦截规则：除了login,doLogin，其他都拦截判断
        registry.addInterceptor(new LoginInterceptor()).addPathPatterns("/house/**,/index/**").excludePathPatterns("/user/login","/user/doLogin","user/findAll","user/queryById");
        super.addInterceptors(registry);
    }

}
