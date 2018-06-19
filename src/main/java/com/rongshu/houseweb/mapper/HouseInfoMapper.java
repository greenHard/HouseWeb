package com.rongshu.houseweb.mapper;

import com.rongshu.houseweb.entity.HouseInfo;
import com.rongshu.houseweb.entity.HouseInfoExample;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface HouseInfoMapper {
    int countByExample(HouseInfoExample example);

    int deleteByExample(HouseInfoExample example);

    int deleteByPrimaryKey(Long id);

    int insert(HouseInfo record);

    int insertSelective(HouseInfo record);

    List<HouseInfo> selectByExample(HouseInfoExample example);

    HouseInfo selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") HouseInfo record, @Param("example") HouseInfoExample example);

    int updateByExample(@Param("record") HouseInfo record, @Param("example") HouseInfoExample example);

    int updateByPrimaryKeySelective(HouseInfo record);

    int updateByPrimaryKey(HouseInfo record);

    /**
     * 查询所有楼盘的数据
     */
    List<HouseInfo> queryHouseList();

    /**
     * 批量删除楼盘
     * @param ids 要删除的id
     */
    void deleteByIDS(Long[] ids);

    /**
     * 上架楼盘
     * @param id
     */
    void reshelfHouseById(Long id);

    /**
     * 下架楼盘
     * @param id
     */
    void instockHouseById(Long id);

    /**
     * 通过id删除House
     * @param id
     */
    void deleteHouseById(Long id);

    /**
     * 查询上架的楼盘
     * @return
     */
    List<HouseInfo> queryHouseListByStatus();
}