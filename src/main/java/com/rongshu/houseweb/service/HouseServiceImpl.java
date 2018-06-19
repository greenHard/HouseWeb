package com.rongshu.houseweb.service;

import com.rongshu.houseweb.entity.HouseInfo;
import com.rongshu.houseweb.entity.HouseInfoExample;
import com.rongshu.houseweb.mapper.HouseInfoMapper;
import com.rongshu.houseweb.vo.HouseInfoVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author zhang yuyang
 * @ClassName: com.rongshu.houseweb.service.HouseServiceImpl
 * @Description: 楼盘service实现类
 * @Date 2018/05/31 14:27
 */
@Service
public class HouseServiceImpl implements HouseService {

    @Autowired
    private HouseInfoMapper houseInfoMapper;


    @Transactional(rollbackFor = Exception.class)
    @Override
    public void save(HouseInfo houseInfo) {

        houseInfo.setHiStatus(1);
        // 1. 插入数据,获取对应的id
       houseInfoMapper.insertSelective(houseInfo);
    }

    @Override
    public List<HouseInfo> queryHouseList() {
        return houseInfoMapper.queryHouseList();
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public void deleteHouse(Long[] ids) {
        for (Long id : ids) {
            houseInfoMapper.deleteHouseById(id);
        }
    }

    @Override
    public void updateHouseInfo(HouseInfo houseInfo) {
        houseInfoMapper.updateByPrimaryKeySelective(houseInfo);
    }

    @Override
    public void instockHouse(Long[] ids) {
        for (Long id : ids) {
            houseInfoMapper.instockHouseById(id);
        }
    }

    @Override
    public void reshelfHouse(Long[] ids) {
        for (Long id : ids) {
            houseInfoMapper.reshelfHouseById(id);
        }
    }

    @Override
    public HouseInfo queryHouseById(Long id) {
        return houseInfoMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<HouseInfo> queryHouseListByStatus() {
        return houseInfoMapper.queryHouseListByStatus();
    }


}
