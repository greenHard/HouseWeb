package com.rongshu.houseweb.service;

import com.rongshu.houseweb.entity.HouseInfo;
import com.rongshu.houseweb.vo.HouseInfoVO;

import java.util.List;

/**
 * 楼盘接口
 * @author  zhang yuyang
 */
public interface HouseService {

    /**
     * 保存楼盘数据
     * @param houseInfo 楼盘基本信息
     */
    void save(HouseInfo houseInfo);

    /**
     * 查询HouseInfo数据
     * @return 返回查询到的数据
     */
    List<HouseInfo> queryHouseList();

    /**
     * 通过商品id批量删除数据
     * @param ids 商品ids
     */
    void deleteHouse(Long[] ids);

    /**
     * 更新楼盘的信息
     * @param houseInfo 楼盘信息
     */
    void updateHouseInfo(HouseInfo houseInfo);

    /**
     * 楼盘下架
     * @param ids
     */
    void instockHouse(Long[] ids);

    /**
     * 楼盘下架
     * @param ids
     */
    void reshelfHouse(Long[] ids);

    /**
     * 通过id查询楼盘
     * @param id
     * @return
     */
    HouseInfo queryHouseById(Long id);

    /**
     * 查询正常上架的楼盘
     * @return
     */
    List<HouseInfo> queryHouseListByStatus();
}
