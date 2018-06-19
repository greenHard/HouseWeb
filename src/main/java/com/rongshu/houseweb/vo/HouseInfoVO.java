package com.rongshu.houseweb.vo;

import com.rongshu.houseweb.entity.HouseInfo;

/**
 * @author zhang yuyang
 * @ClassName: com.rongshu.houseweb.vo.HouseInfoVO
 * @Description: 接收视图数据对象
 * @create 2018/05/31 17:26
 */
public class HouseInfoVO extends HouseInfo{

    private String hiShowPicImg;

    private String hdSuperiorityPic1Img;

    private String hdSuperiorityPic2Img;

    private String hdPeripheralMatchingPic1Img;

    private String hdPeripheralMatchingPic2Img;

    private String hdPeripheralMatchingPic3Img;

    private String hdHouseTypePicImg;

    public String getHiShowPicImg() {
        return hiShowPicImg;
    }

    public void setHiShowPicImg(String hiShowPicImg) {
        this.hiShowPicImg = hiShowPicImg;
    }

    public String getHdSuperiorityPic1Img() {
        return hdSuperiorityPic1Img;
    }

    public void setHdSuperiorityPic1Img(String hdSuperiorityPic1Img) {
        this.hdSuperiorityPic1Img = hdSuperiorityPic1Img;
    }

    public String getHdSuperiorityPic2Img() {
        return hdSuperiorityPic2Img;
    }

    public void setHdSuperiorityPic2Img(String hdSuperiorityPic2Img) {
        this.hdSuperiorityPic2Img = hdSuperiorityPic2Img;
    }

    public String getHdPeripheralMatchingPic1Img() {
        return hdPeripheralMatchingPic1Img;
    }

    public void setHdPeripheralMatchingPic1Img(String hdPeripheralMatchingPic1Img) {
        this.hdPeripheralMatchingPic1Img = hdPeripheralMatchingPic1Img;
    }

    public String getHdPeripheralMatchingPic2Img() {
        return hdPeripheralMatchingPic2Img;
    }

    public void setHdPeripheralMatchingPic2Img(String hdPeripheralMatchingPic2Img) {
        this.hdPeripheralMatchingPic2Img = hdPeripheralMatchingPic2Img;
    }

    public String getHdPeripheralMatchingPic3Img() {
        return hdPeripheralMatchingPic3Img;
    }

    public void setHdPeripheralMatchingPic3Img(String hdPeripheralMatchingPic3Img) {
        this.hdPeripheralMatchingPic3Img = hdPeripheralMatchingPic3Img;
    }

    public String getHdHouseTypePicImg() {
        return hdHouseTypePicImg;
    }

    public void setHdHouseTypePicImg(String hdHouseTypePicImg) {
        this.hdHouseTypePicImg = hdHouseTypePicImg;
    }

    @Override
    public String toString() {
        return "HouseInfoVO{" +
                "hiShowPicImg='" + hiShowPicImg + '\'' +
                ", hdSuperiorityPic1Img='" + hdSuperiorityPic1Img + '\'' +
                ", hdSuperiorityPic2Img='" + hdSuperiorityPic2Img + '\'' +
                ", hdPeripheralMatchingPic1Img='" + hdPeripheralMatchingPic1Img + '\'' +
                ", hdPeripheralMatchingPic2Img='" + hdPeripheralMatchingPic2Img + '\'' +
                ", hdPeripheralMatchingPic3Img='" + hdPeripheralMatchingPic3Img + '\'' +
                ", hdHouseTypePicImg='" + hdHouseTypePicImg + '\'' +
                "} " + super.toString();
    }
}
