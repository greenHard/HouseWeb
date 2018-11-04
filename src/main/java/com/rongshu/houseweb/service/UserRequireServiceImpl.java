package com.rongshu.houseweb.service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.rongshu.houseweb.entity.UserRequire;
import com.rongshu.houseweb.mapper.UserRequireMapper;
import org.springframework.stereotype.Service;

@Service
public class UserRequireServiceImpl extends ServiceImpl<UserRequireMapper,UserRequire> implements UserRequireService {

}
