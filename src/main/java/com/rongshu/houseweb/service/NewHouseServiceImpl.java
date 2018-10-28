package com.rongshu.houseweb.service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.rongshu.houseweb.entity.NewHouseInfo;
import com.rongshu.houseweb.mapper.NewHouseInfoMapper;
import org.springframework.stereotype.Service;

@Service
public class NewHouseServiceImpl extends ServiceImpl<NewHouseInfoMapper, NewHouseInfo> implements NewHouseService {
}
