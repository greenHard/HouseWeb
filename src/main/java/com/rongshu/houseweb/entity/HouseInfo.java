package com.rongshu.houseweb.entity;

import org.hibernate.validator.constraints.NotBlank;

import java.io.Serializable;
import java.util.Date;

public class HouseInfo implements Serializable {
    private Long id;

    @NotBlank
    private String hiName;

    @NotBlank
    private String hiAvgPrice;

    @NotBlank
    private String hiAttache;

    @NotBlank
    private String hiAfforestation;

    @NotBlank
    private String hiDecorate;

    @NotBlank
    private String hiAddress;

    @NotBlank
    private String hiParkPlace;

    @NotBlank
    private String hiPlotRatio;

    @NotBlank
    private String hiCategory;

    @NotBlank
    private String hiYear;

    @NotBlank
    private String hiManagementFee;

    @NotBlank
    private String hiConstructionRatio;

    @NotBlank
    private String hiType;

    @NotBlank
    private String hiAcreage;

    @NotBlank
    private String hiDeliveryTime;

    @NotBlank
    private String hiDeveloper;

    private String hiShowPic;

    private String hiSuperiorityPic;

    @NotBlank
    private String hiSuperiorityDesc;

    private String hiHouseTypePic;

    private String hiPeripheralMatchingPic;

    @NotBlank
    private String hiPeripheralMatchingDesc;

    @NotBlank
    private String hiReminderContent;

    @NotBlank
    private String hiHotLine;

    /**
     * 首页logo
     */
    private String hiLogo;

    private Integer hiStatus;

    private Date hiUpdateDate;

    private Date hiCreateDate;

    private static final long serialVersionUID = 1L;

    public String getHiLogo() {
        return hiLogo;
    }

    public void setHiLogo(String hiLogo) {
        this.hiLogo = hiLogo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHiName() {
        return hiName;
    }

    public void setHiName(String hiName) {
        this.hiName = hiName == null ? null : hiName.trim();
    }

    public String getHiAvgPrice() {
        return hiAvgPrice;
    }

    public void setHiAvgPrice(String hiAvgPrice) {
        this.hiAvgPrice = hiAvgPrice == null ? null : hiAvgPrice.trim();
    }

    public String getHiAttache() {
        return hiAttache;
    }

    public void setHiAttache(String hiAttache) {
        this.hiAttache = hiAttache == null ? null : hiAttache.trim();
    }

    public String getHiAfforestation() {
        return hiAfforestation;
    }

    public void setHiAfforestation(String hiAfforestation) {
        this.hiAfforestation = hiAfforestation == null ? null : hiAfforestation.trim();
    }

    public String getHiDecorate() {
        return hiDecorate;
    }

    public void setHiDecorate(String hiDecorate) {
        this.hiDecorate = hiDecorate == null ? null : hiDecorate.trim();
    }

    public String getHiParkPlace() {
        return hiParkPlace;
    }

    public void setHiParkPlace(String hiParkPlace) {
        this.hiParkPlace = hiParkPlace == null ? null : hiParkPlace.trim();
    }

    public String getHiPlotRatio() {
        return hiPlotRatio;
    }

    public void setHiPlotRatio(String hiPlotRatio) {
        this.hiPlotRatio = hiPlotRatio == null ? null : hiPlotRatio.trim();
    }

    public String getHiCategory() {
        return hiCategory;
    }

    public void setHiCategory(String hiCategory) {
        this.hiCategory = hiCategory == null ? null : hiCategory.trim();
    }

    public String getHiYear() {
        return hiYear;
    }

    public void setHiYear(String hiYear) {
        this.hiYear = hiYear == null ? null : hiYear.trim();
    }

    public String getHiManagementFee() {
        return hiManagementFee;
    }

    public void setHiManagementFee(String hiManagementFee) {
        this.hiManagementFee = hiManagementFee == null ? null : hiManagementFee.trim();
    }

    public String getHiConstructionRatio() {
        return hiConstructionRatio;
    }

    public void setHiConstructionRatio(String hiConstructionRatio) {
        this.hiConstructionRatio = hiConstructionRatio == null ? null : hiConstructionRatio.trim();
    }

    public String getHiType() {
        return hiType;
    }

    public void setHiType(String hiType) {
        this.hiType = hiType == null ? null : hiType.trim();
    }

    public String getHiAcreage() {
        return hiAcreage;
    }

    public void setHiAcreage(String hiAcreage) {
        this.hiAcreage = hiAcreage == null ? null : hiAcreage.trim();
    }

    public String getHiDeliveryTime() {
        return hiDeliveryTime;
    }

    public void setHiDeliveryTime(String hiDeliveryTime) {
        this.hiDeliveryTime = hiDeliveryTime == null ? null : hiDeliveryTime.trim();
    }

    public String getHiDeveloper() {
        return hiDeveloper;
    }

    public void setHiDeveloper(String hiDeveloper) {
        this.hiDeveloper = hiDeveloper == null ? null : hiDeveloper.trim();
    }

    public String getHiShowPic() {
        return hiShowPic;
    }

    public void setHiShowPic(String hiShowPic) {
        this.hiShowPic = hiShowPic == null ? null : hiShowPic.trim();
    }

    public String getHiSuperiorityPic() {
        return hiSuperiorityPic;
    }

    public void setHiSuperiorityPic(String hiSuperiorityPic) {
        this.hiSuperiorityPic = hiSuperiorityPic == null ? null : hiSuperiorityPic.trim();
    }

    public String getHiSuperiorityDesc() {
        return hiSuperiorityDesc;
    }

    public void setHiSuperiorityDesc(String hiSuperiorityDesc) {
        this.hiSuperiorityDesc = hiSuperiorityDesc == null ? null : hiSuperiorityDesc.trim();
    }

    public String getHiHouseTypePic() {
        return hiHouseTypePic;
    }

    public void setHiHouseTypePic(String hiHouseTypePic) {
        this.hiHouseTypePic = hiHouseTypePic == null ? null : hiHouseTypePic.trim();
    }

    public String getHiPeripheralMatchingPic() {
        return hiPeripheralMatchingPic;
    }

    public void setHiPeripheralMatchingPic(String hiPeripheralMatchingPic) {
        this.hiPeripheralMatchingPic = hiPeripheralMatchingPic == null ? null : hiPeripheralMatchingPic.trim();
    }

    public String getHiPeripheralMatchingDesc() {
        return hiPeripheralMatchingDesc;
    }

    public void setHiPeripheralMatchingDesc(String hiPeripheralMatchingDesc) {
        this.hiPeripheralMatchingDesc = hiPeripheralMatchingDesc == null ? null : hiPeripheralMatchingDesc.trim();
    }

    public String getHiReminderContent() {
        return hiReminderContent;
    }

    public void setHiReminderContent(String hiReminderContent) {
        this.hiReminderContent = hiReminderContent == null ? null : hiReminderContent.trim();
    }

    public String getHiHotLine() {
        return hiHotLine;
    }

    public void setHiHotLine(String hiHotLine) {
        this.hiHotLine = hiHotLine == null ? null : hiHotLine.trim();
    }

    public Integer getHiStatus() {
        return hiStatus;
    }

    public void setHiStatus(Integer hiStatus) {
        this.hiStatus = hiStatus;
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

    public String getHiAddress() {
        return hiAddress;
    }

    public void setHiAddress(String hiAddress) {
        this.hiAddress = hiAddress;
    }

    @Override
    public String toString() {
        return "HouseInfo{" +
                "id=" + id +
                ", hiName='" + hiName + '\'' +
                ", hiAvgPrice='" + hiAvgPrice + '\'' +
                ", hiAttache='" + hiAttache + '\'' +
                ", hiAfforestation='" + hiAfforestation + '\'' +
                ", hiDecorate='" + hiDecorate + '\'' +
                ", hiAddress='" + hiAddress + '\'' +
                ", hiParkPlace='" + hiParkPlace + '\'' +
                ", hiPlotRatio='" + hiPlotRatio + '\'' +
                ", hiCategory='" + hiCategory + '\'' +
                ", hiYear='" + hiYear + '\'' +
                ", hiManagementFee='" + hiManagementFee + '\'' +
                ", hiConstructionRatio='" + hiConstructionRatio + '\'' +
                ", hiType='" + hiType + '\'' +
                ", hiAcreage='" + hiAcreage + '\'' +
                ", hiDeliveryTime='" + hiDeliveryTime + '\'' +
                ", hiDeveloper='" + hiDeveloper + '\'' +
                ", hiShowPic='" + hiShowPic + '\'' +
                ", hiSuperiorityPic='" + hiSuperiorityPic + '\'' +
                ", hiSuperiorityDesc='" + hiSuperiorityDesc + '\'' +
                ", hiHouseTypePic='" + hiHouseTypePic + '\'' +
                ", hiPeripheralMatchingPic='" + hiPeripheralMatchingPic + '\'' +
                ", hiPeripheralMatchingDesc='" + hiPeripheralMatchingDesc + '\'' +
                ", hiReminderContent='" + hiReminderContent + '\'' +
                ", hiHotLine='" + hiHotLine + '\'' +
                ", hiStatus=" + hiStatus +
                ", hiUpdateDate=" + hiUpdateDate +
                ", hiCreateDate=" + hiCreateDate +
                '}';
    }
}