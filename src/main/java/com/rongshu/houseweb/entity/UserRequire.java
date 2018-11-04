package com.rongshu.houseweb.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.util.Date;

/**
 * 用户需求实体类
 */
@TableName("hi_user_require")
public class UserRequire {

    @TableId(value = "ID", type = IdType.AUTO)
    private Long id;

    /**
     * 户型类型
     */
    private String hiRequireHouseType;

    /**
     * 来自楼盘名称
     */
    private String hiFromHouseName;

    /**
     * 用户电话
     */
    private String mobileNumber;

    /**
     * 更新时间
     */
    private Date hiUpdateDate;

    /**
     * 创建时间
     */
    private Date hiCreateDate;

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHiRequireHouseType() {
        return hiRequireHouseType;
    }

    public void setHiRequireHouseType(String hiRequireHouseType) {
        this.hiRequireHouseType = hiRequireHouseType;
    }

    public String getHiFromHouseName() {
        return hiFromHouseName;
    }

    public void setHiFromHouseName(String hiFromHouseName) {
        this.hiFromHouseName = hiFromHouseName;
    }

    public Date getHiUpdateDate() {
        return hiUpdateDate;
    }

    public void setHiUpdateDate(Date hiUpdateDate) {
        this.hiUpdateDate = hiUpdateDate;
    }

    public Date getHiCreateDate() {
        return hiCreateDate;
    }

    public void setHiCreateDate(Date hiCreateDate) {
        this.hiCreateDate = hiCreateDate;
    }
}
