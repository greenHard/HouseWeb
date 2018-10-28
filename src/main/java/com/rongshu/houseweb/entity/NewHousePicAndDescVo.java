package com.rongshu.houseweb.entity;

/**
 * 图片和描述Vo类
 */
public class NewHousePicAndDescVo {

    /**
     * 0 项目优势
     * 1 周边环境
     * 2 交通规划
     * 3 样板户型
     * 4 投资潜力
     */
    private Integer type;

    /**
     * 图片链接
     */
    private String url;

    /**
     * 图片说明
     */
    private String tips;

    /**
     * 标题
     */
    private String title;

    /**
     * 描述
     */
    private String desc;

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTips() {
        return tips;
    }

    public void setTips(String tips) {
        this.tips = tips;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
