package com.rongshu.houseweb.service;

import com.rongshu.houseweb.entity.User;
import org.apache.ibatis.annotations.Param;

/** 
 * 用户服务类
 * @author yuyang.zhang 
 * @date 2018/12/20 
 */ 
public interface UserService {

    /**
     * 通过用户名和密码查询用户
     * @param userName 用户名
     * @param password 密码
     * @return 用户
     */
    User findUserByUserNameAndPassword(@Param("userName") String userName, @Param("password") String password);
}
