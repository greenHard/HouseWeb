package com.rongshu.houseweb.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.Date;

@TableName("new_house_info")
public class NewHouseInfo implements Serializable {
    @TableId(value = "ID", type = IdType.AUTO)
    private Long id;

    @NotBlank
    private String hiName;

    // 楼盘描述
    @NotBlank
    private String hiDesc;

    @NotBlank
    private String hiLogo;

    // 项目优势 --start
    @NotBlank
    private String hiSuperiorityPic;

    @NotBlank
    private String hiSuperiorityDesc;

    // 周边环境 --start
    @NotBlank
    private String hiSurroundingEnviromentPic;

    @NotBlank
    private String hiSurroundingEnviromentDesc;

    // 交通规划 --start
    @NotBlank
    private String hiTrafficProgrammePic;

    @NotBlank
    private String hiTrafficProgrammeDesc;


    // 样板户型 --start
    @NotBlank
    private String hiExampleHouseTypePic;

    @NotBlank
    private String hiExampleHouseTypeDesc;


    // 投资潜力 -- start
    @NotBlank
    private String hiInvestmentPotentialLogo;

    @NotBlank
    private String hiInvestmentPotentialTitle;

    @NotBlank
    private String hiInvestmentPotentialDesc;

    // 间隔图片
    @NotBlank
    private String hiIntervalPic;

    @NotBlank
    private String hiHotLine;

    private String hiQrCode;

    private Integer hiStatus;

    private Date hiUpdateDate;

    private Date hiCreateDate;

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

    public String getHiSuperiorityPic() {
        return hiSuperiorityPic;
    }

    public void setHiSuperiorityPic(String hiSuperiorityPic) {
        this.hiSuperiorityPic = hiSuperiorityPic;
    }

    public String getHiSuperiorityDesc() {
        return hiSuperiorityDesc;
    }

    public void setHiSuperiorityDesc(String hiSuperiorityDesc) {
        this.hiSuperiorityDesc = hiSuperiorityDesc;
    }

    public String getHiSurroundingEnviromentPic() {
        return hiSurroundingEnviromentPic;
    }

    public void setHiSurroundingEnviromentPic(String hiSurroundingEnviromentPic) {
        this.hiSurroundingEnviromentPic = hiSurroundingEnviromentPic;
    }

    public String getHiSurroundingEnviromentDesc() {
        return hiSurroundingEnviromentDesc;
    }

    public void setHiSurroundingEnviromentDesc(String hiSurroundingEnviromentDesc) {
        this.hiSurroundingEnviromentDesc = hiSurroundingEnviromentDesc;
    }

    public String getHiTrafficProgrammePic() {
        return hiTrafficProgrammePic;
    }

    public void setHiTrafficProgrammePic(String hiTrafficProgrammePic) {
        this.hiTrafficProgrammePic = hiTrafficProgrammePic;
    }

    public String getHiTrafficProgrammeDesc() {
        return hiTrafficProgrammeDesc;
    }

    public void setHiTrafficProgrammeDesc(String hiTrafficProgrammeDesc) {
        this.hiTrafficProgrammeDesc = hiTrafficProgrammeDesc;
    }

    public String getHiExampleHouseTypePic() {
        return hiExampleHouseTypePic;
    }

    public void setHiExampleHouseTypePic(String hiExampleHouseTypePic) {
        this.hiExampleHouseTypePic = hiExampleHouseTypePic;
    }

    public String getHiExampleHouseTypeDesc() {
        return hiExampleHouseTypeDesc;
    }

    public void setHiExampleHouseTypeDesc(String hiExampleHouseTypeDesc) {
        this.hiExampleHouseTypeDesc = hiExampleHouseTypeDesc;
    }

    public String getHiInvestmentPotentialLogo() {
        return hiInvestmentPotentialLogo;
    }

    public void setHiInvestmentPotentialLogo(String hiInvestmentPotentialLogo) {
        this.hiInvestmentPotentialLogo = hiInvestmentPotentialLogo;
    }

    public String getHiInvestmentPotentialTitle() {
        return hiInvestmentPotentialTitle;
    }

    public void setHiInvestmentPotentialTitle(String hiInvestmentPotentialTitle) {
        this.hiInvestmentPotentialTitle = hiInvestmentPotentialTitle;
    }

    public String getHiInvestmentPotentialDesc() {
        return hiInvestmentPotentialDesc;
    }

    public void setHiInvestmentPotentialDesc(String hiInvestmentPotentialDesc) {
        this.hiInvestmentPotentialDesc = hiInvestmentPotentialDesc;
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

    public String getHiQrCode() {
        return hiQrCode;
    }

    public void setHiQrCode(String hiQrCode) {
        this.hiQrCode = hiQrCode;
    }

    public String getHiDesc() {
        return hiDesc;
    }

    public void setHiDesc(String hiDesc) {
        this.hiDesc = hiDesc;
    }
}
