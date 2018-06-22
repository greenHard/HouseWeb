package com.rongshu.houseweb.entity;

import lombok.Data;
import org.hibernate.validator.constraints.NotBlank;

import java.io.Serializable;
import java.util.Date;

@Data
public class HouseInfo implements Serializable {

    private static final long serialVersionUID = 1L;

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

    /**
     * 首付时间
     */
    @NotBlank
    private String hiDownPayment;

    /**
     * 开盘时间
     */
    @NotBlank
    private String hiOpenTime;

    /**
     * 楼盘图片,用于楼盘详情轮播,3张
     */
    private String hiLogo;

    /**
     * 楼盘展示图片  1张
     */
    private String hiShowPic;

    /**
     * 楼盘状态
     */
    private Integer hiStatus;

    /**
     * 项目特色图片
     */
    private String hiProjectFeaturesPic;


    /**
     * 项目特色描述
     */
    private String hiProjectFeaturesDesc;

    /**
     * 楼盘优势图片
     */
    private String hiSuperiorityPic;

    /**
     * 楼盘优势描述
     */
    private String hiSuperiorityDesc;

    /**
     * 区域显著图片
     */
    private String hiRegionalSignificancePic;


    /**
     * 区域显著描述
     */
    private String hiRegionalSignificanceDesc;

    /**
     * 楼盘周边配套图片
     */
    private String hiPeripheralMatchingPic;

    /**
     * 楼盘周边配套描述
     */
    private String hiPeripheralMatchingDesc;

    /**
     * 楼盘户型图片
     */
    private String hiHouseTypePic;

    /**
     * 样板房描述
     */
    private String hiModelHousesDesc;

    /**
     * 样板房图片
     */
    private String hiModelHousesPic;

    @NotBlank
    private String hiReminderContent;

    @NotBlank
    private String hiHotLine;

    private Date hiUpdateDate;

    private Date hiCreateDate;
}