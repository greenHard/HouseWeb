package com.rongshu.houseweb.vo;

public class UserRequireCollectVo {

    /**
     * 楼盘id
     */
    private Long id;

    /**
     * 户型类型
     */
    private String requireHouseType;

    /**
     * 用户电话
     */
    private String mobileNumber;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRequireHouseType() {
        return requireHouseType;
    }

    public void setRequireHouseType(String requireHouseType) {
        this.requireHouseType = requireHouseType;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    @Override
    public String toString() {
        return "UserRequireCollectVo{" +
                "id=" + id +
                ", requireHouseType='" + requireHouseType + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                '}';
    }
}
