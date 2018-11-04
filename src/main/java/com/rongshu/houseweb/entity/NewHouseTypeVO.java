package com.rongshu.houseweb.entity;

import java.util.List;

public class NewHouseTypeVO {

    private Long id;

    private String hiName;

    private String hiLogo;

    private List<NewHousePicAndDescVo> detail;

    // 间隔图片
    private String hiIntervalPic;

    private String hiHotLine;

    // 二维码url
    private String qrCode;

    public String getQrCode() {
        return qrCode;
    }

    public void setQrCode(String qrCode) {
        this.qrCode = qrCode;
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
        this.hiName = hiName;
    }

    public String getHiLogo() {
        return hiLogo;
    }

    public void setHiLogo(String hiLogo) {
        this.hiLogo = hiLogo;
    }

    public List<NewHousePicAndDescVo> getDetail() {
        return detail;
    }

    public void setDetail(List<NewHousePicAndDescVo> detail) {
        this.detail = detail;
    }

    public String getHiIntervalPic() {
        return hiIntervalPic;
    }

    public void setHiIntervalPic(String hiIntervalPic) {
        this.hiIntervalPic = hiIntervalPic;
    }

    public String getHiHotLine() {
        return hiHotLine;
    }

    public void setHiHotLine(String hiHotLine) {
        this.hiHotLine = hiHotLine;
    }
}
