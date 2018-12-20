package com.rongshu.houseweb.service;

import com.rongshu.houseweb.entity.User;
import com.rongshu.houseweb.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author zhang yuyang
 * @ClassName: com.rongshu.houseweb.service.UserServiceImpl
 * @Description: 用户业务层实现类
 * @create 2018/05/30 10:25
 */
@Service
public class UserServiceImpl implements UserService {

    private final UserMapper userMapper;

    @Autowired
    public UserServiceImpl(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public User findUserByUserNameAndPassword(String userName, String password) {
        return userMapper.findUserByUserNameAndPassword(userName, password);
    }
}
