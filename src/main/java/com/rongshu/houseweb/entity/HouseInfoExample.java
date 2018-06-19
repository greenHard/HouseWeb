package com.rongshu.houseweb.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class HouseInfoExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected int limitStart = -1;

    protected int pageSize = -1;

    public HouseInfoExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    public void setLimitStart(int limitStart) {
        this.limitStart=limitStart;
    }

    public int getLimitStart() {
        return limitStart;
    }

    public void setPageSize(int pageSize) {
        this.pageSize=pageSize;
    }

    public int getPageSize() {
        return pageSize;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("ID is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("ID is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Long value) {
            addCriterion("ID =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Long value) {
            addCriterion("ID <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Long value) {
            addCriterion("ID >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Long value) {
            addCriterion("ID >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Long value) {
            addCriterion("ID <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Long value) {
            addCriterion("ID <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Long> values) {
            addCriterion("ID in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Long> values) {
            addCriterion("ID not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Long value1, Long value2) {
            addCriterion("ID between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Long value1, Long value2) {
            addCriterion("ID not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andHiNameIsNull() {
            addCriterion("hi_name is null");
            return (Criteria) this;
        }

        public Criteria andHiNameIsNotNull() {
            addCriterion("hi_name is not null");
            return (Criteria) this;
        }

        public Criteria andHiNameEqualTo(String value) {
            addCriterion("hi_name =", value, "hiName");
            return (Criteria) this;
        }

        public Criteria andHiNameNotEqualTo(String value) {
            addCriterion("hi_name <>", value, "hiName");
            return (Criteria) this;
        }

        public Criteria andHiNameGreaterThan(String value) {
            addCriterion("hi_name >", value, "hiName");
            return (Criteria) this;
        }

        public Criteria andHiNameGreaterThanOrEqualTo(String value) {
            addCriterion("hi_name >=", value, "hiName");
            return (Criteria) this;
        }

        public Criteria andHiNameLessThan(String value) {
            addCriterion("hi_name <", value, "hiName");
            return (Criteria) this;
        }

        public Criteria andHiNameLessThanOrEqualTo(String value) {
            addCriterion("hi_name <=", value, "hiName");
            return (Criteria) this;
        }

        public Criteria andHiNameLike(String value) {
            addCriterion("hi_name like", value, "hiName");
            return (Criteria) this;
        }

        public Criteria andHiNameNotLike(String value) {
            addCriterion("hi_name not like", value, "hiName");
            return (Criteria) this;
        }

        public Criteria andHiNameIn(List<String> values) {
            addCriterion("hi_name in", values, "hiName");
            return (Criteria) this;
        }

        public Criteria andHiNameNotIn(List<String> values) {
            addCriterion("hi_name not in", values, "hiName");
            return (Criteria) this;
        }

        public Criteria andHiNameBetween(String value1, String value2) {
            addCriterion("hi_name between", value1, value2, "hiName");
            return (Criteria) this;
        }

        public Criteria andHiNameNotBetween(String value1, String value2) {
            addCriterion("hi_name not between", value1, value2, "hiName");
            return (Criteria) this;
        }

        public Criteria andHiAvgPriceIsNull() {
            addCriterion("hi_avg_price is null");
            return (Criteria) this;
        }

        public Criteria andHiAvgPriceIsNotNull() {
            addCriterion("hi_avg_price is not null");
            return (Criteria) this;
        }

        public Criteria andHiAvgPriceEqualTo(String value) {
            addCriterion("hi_avg_price =", value, "hiAvgPrice");
            return (Criteria) this;
        }

        public Criteria andHiAvgPriceNotEqualTo(String value) {
            addCriterion("hi_avg_price <>", value, "hiAvgPrice");
            return (Criteria) this;
        }

        public Criteria andHiAvgPriceGreaterThan(String value) {
            addCriterion("hi_avg_price >", value, "hiAvgPrice");
            return (Criteria) this;
        }

        public Criteria andHiAvgPriceGreaterThanOrEqualTo(String value) {
            addCriterion("hi_avg_price >=", value, "hiAvgPrice");
            return (Criteria) this;
        }

        public Criteria andHiAvgPriceLessThan(String value) {
            addCriterion("hi_avg_price <", value, "hiAvgPrice");
            return (Criteria) this;
        }

        public Criteria andHiAvgPriceLessThanOrEqualTo(String value) {
            addCriterion("hi_avg_price <=", value, "hiAvgPrice");
            return (Criteria) this;
        }

        public Criteria andHiAvgPriceLike(String value) {
            addCriterion("hi_avg_price like", value, "hiAvgPrice");
            return (Criteria) this;
        }

        public Criteria andHiAvgPriceNotLike(String value) {
            addCriterion("hi_avg_price not like", value, "hiAvgPrice");
            return (Criteria) this;
        }

        public Criteria andHiAvgPriceIn(List<String> values) {
            addCriterion("hi_avg_price in", values, "hiAvgPrice");
            return (Criteria) this;
        }

        public Criteria andHiAvgPriceNotIn(List<String> values) {
            addCriterion("hi_avg_price not in", values, "hiAvgPrice");
            return (Criteria) this;
        }

        public Criteria andHiAvgPriceBetween(String value1, String value2) {
            addCriterion("hi_avg_price between", value1, value2, "hiAvgPrice");
            return (Criteria) this;
        }

        public Criteria andHiAvgPriceNotBetween(String value1, String value2) {
            addCriterion("hi_avg_price not between", value1, value2, "hiAvgPrice");
            return (Criteria) this;
        }

        public Criteria andHiAttacheIsNull() {
            addCriterion("hi_attache is null");
            return (Criteria) this;
        }

        public Criteria andHiAttacheIsNotNull() {
            addCriterion("hi_attache is not null");
            return (Criteria) this;
        }

        public Criteria andHiAttacheEqualTo(String value) {
            addCriterion("hi_attache =", value, "hiAttache");
            return (Criteria) this;
        }

        public Criteria andHiAttacheNotEqualTo(String value) {
            addCriterion("hi_attache <>", value, "hiAttache");
            return (Criteria) this;
        }

        public Criteria andHiAttacheGreaterThan(String value) {
            addCriterion("hi_attache >", value, "hiAttache");
            return (Criteria) this;
        }

        public Criteria andHiAttacheGreaterThanOrEqualTo(String value) {
            addCriterion("hi_attache >=", value, "hiAttache");
            return (Criteria) this;
        }

        public Criteria andHiAttacheLessThan(String value) {
            addCriterion("hi_attache <", value, "hiAttache");
            return (Criteria) this;
        }

        public Criteria andHiAttacheLessThanOrEqualTo(String value) {
            addCriterion("hi_attache <=", value, "hiAttache");
            return (Criteria) this;
        }

        public Criteria andHiAttacheLike(String value) {
            addCriterion("hi_attache like", value, "hiAttache");
            return (Criteria) this;
        }

        public Criteria andHiAttacheNotLike(String value) {
            addCriterion("hi_attache not like", value, "hiAttache");
            return (Criteria) this;
        }

        public Criteria andHiAttacheIn(List<String> values) {
            addCriterion("hi_attache in", values, "hiAttache");
            return (Criteria) this;
        }

        public Criteria andHiAttacheNotIn(List<String> values) {
            addCriterion("hi_attache not in", values, "hiAttache");
            return (Criteria) this;
        }

        public Criteria andHiAttacheBetween(String value1, String value2) {
            addCriterion("hi_attache between", value1, value2, "hiAttache");
            return (Criteria) this;
        }

        public Criteria andHiAttacheNotBetween(String value1, String value2) {
            addCriterion("hi_attache not between", value1, value2, "hiAttache");
            return (Criteria) this;
        }

        public Criteria andHiAfforestationIsNull() {
            addCriterion("hi_afforestation is null");
            return (Criteria) this;
        }

        public Criteria andHiAfforestationIsNotNull() {
            addCriterion("hi_afforestation is not null");
            return (Criteria) this;
        }

        public Criteria andHiAfforestationEqualTo(String value) {
            addCriterion("hi_afforestation =", value, "hiAfforestation");
            return (Criteria) this;
        }

        public Criteria andHiAfforestationNotEqualTo(String value) {
            addCriterion("hi_afforestation <>", value, "hiAfforestation");
            return (Criteria) this;
        }

        public Criteria andHiAfforestationGreaterThan(String value) {
            addCriterion("hi_afforestation >", value, "hiAfforestation");
            return (Criteria) this;
        }

        public Criteria andHiAfforestationGreaterThanOrEqualTo(String value) {
            addCriterion("hi_afforestation >=", value, "hiAfforestation");
            return (Criteria) this;
        }

        public Criteria andHiAfforestationLessThan(String value) {
            addCriterion("hi_afforestation <", value, "hiAfforestation");
            return (Criteria) this;
        }

        public Criteria andHiAfforestationLessThanOrEqualTo(String value) {
            addCriterion("hi_afforestation <=", value, "hiAfforestation");
            return (Criteria) this;
        }

        public Criteria andHiAfforestationLike(String value) {
            addCriterion("hi_afforestation like", value, "hiAfforestation");
            return (Criteria) this;
        }

        public Criteria andHiAfforestationNotLike(String value) {
            addCriterion("hi_afforestation not like", value, "hiAfforestation");
            return (Criteria) this;
        }

        public Criteria andHiAfforestationIn(List<String> values) {
            addCriterion("hi_afforestation in", values, "hiAfforestation");
            return (Criteria) this;
        }

        public Criteria andHiAfforestationNotIn(List<String> values) {
            addCriterion("hi_afforestation not in", values, "hiAfforestation");
            return (Criteria) this;
        }

        public Criteria andHiAfforestationBetween(String value1, String value2) {
            addCriterion("hi_afforestation between", value1, value2, "hiAfforestation");
            return (Criteria) this;
        }

        public Criteria andHiAfforestationNotBetween(String value1, String value2) {
            addCriterion("hi_afforestation not between", value1, value2, "hiAfforestation");
            return (Criteria) this;
        }

        public Criteria andHiDecorateIsNull() {
            addCriterion("hi_decorate is null");
            return (Criteria) this;
        }

        public Criteria andHiDecorateIsNotNull() {
            addCriterion("hi_decorate is not null");
            return (Criteria) this;
        }

        public Criteria andHiDecorateEqualTo(String value) {
            addCriterion("hi_decorate =", value, "hiDecorate");
            return (Criteria) this;
        }

        public Criteria andHiDecorateNotEqualTo(String value) {
            addCriterion("hi_decorate <>", value, "hiDecorate");
            return (Criteria) this;
        }

        public Criteria andHiDecorateGreaterThan(String value) {
            addCriterion("hi_decorate >", value, "hiDecorate");
            return (Criteria) this;
        }

        public Criteria andHiDecorateGreaterThanOrEqualTo(String value) {
            addCriterion("hi_decorate >=", value, "hiDecorate");
            return (Criteria) this;
        }

        public Criteria andHiDecorateLessThan(String value) {
            addCriterion("hi_decorate <", value, "hiDecorate");
            return (Criteria) this;
        }

        public Criteria andHiDecorateLessThanOrEqualTo(String value) {
            addCriterion("hi_decorate <=", value, "hiDecorate");
            return (Criteria) this;
        }

        public Criteria andHiDecorateLike(String value) {
            addCriterion("hi_decorate like", value, "hiDecorate");
            return (Criteria) this;
        }

        public Criteria andHiDecorateNotLike(String value) {
            addCriterion("hi_decorate not like", value, "hiDecorate");
            return (Criteria) this;
        }

        public Criteria andHiDecorateIn(List<String> values) {
            addCriterion("hi_decorate in", values, "hiDecorate");
            return (Criteria) this;
        }

        public Criteria andHiDecorateNotIn(List<String> values) {
            addCriterion("hi_decorate not in", values, "hiDecorate");
            return (Criteria) this;
        }

        public Criteria andHiDecorateBetween(String value1, String value2) {
            addCriterion("hi_decorate between", value1, value2, "hiDecorate");
            return (Criteria) this;
        }

        public Criteria andHiDecorateNotBetween(String value1, String value2) {
            addCriterion("hi_decorate not between", value1, value2, "hiDecorate");
            return (Criteria) this;
        }

        public Criteria andHiParkPlaceIsNull() {
            addCriterion("hi_park_place is null");
            return (Criteria) this;
        }

        public Criteria andHiParkPlaceIsNotNull() {
            addCriterion("hi_park_place is not null");
            return (Criteria) this;
        }

        public Criteria andHiParkPlaceEqualTo(String value) {
            addCriterion("hi_park_place =", value, "hiParkPlace");
            return (Criteria) this;
        }

        public Criteria andHiParkPlaceNotEqualTo(String value) {
            addCriterion("hi_park_place <>", value, "hiParkPlace");
            return (Criteria) this;
        }

        public Criteria andHiParkPlaceGreaterThan(String value) {
            addCriterion("hi_park_place >", value, "hiParkPlace");
            return (Criteria) this;
        }

        public Criteria andHiParkPlaceGreaterThanOrEqualTo(String value) {
            addCriterion("hi_park_place >=", value, "hiParkPlace");
            return (Criteria) this;
        }

        public Criteria andHiParkPlaceLessThan(String value) {
            addCriterion("hi_park_place <", value, "hiParkPlace");
            return (Criteria) this;
        }

        public Criteria andHiParkPlaceLessThanOrEqualTo(String value) {
            addCriterion("hi_park_place <=", value, "hiParkPlace");
            return (Criteria) this;
        }

        public Criteria andHiParkPlaceLike(String value) {
            addCriterion("hi_park_place like", value, "hiParkPlace");
            return (Criteria) this;
        }

        public Criteria andHiParkPlaceNotLike(String value) {
            addCriterion("hi_park_place not like", value, "hiParkPlace");
            return (Criteria) this;
        }

        public Criteria andHiParkPlaceIn(List<String> values) {
            addCriterion("hi_park_place in", values, "hiParkPlace");
            return (Criteria) this;
        }

        public Criteria andHiParkPlaceNotIn(List<String> values) {
            addCriterion("hi_park_place not in", values, "hiParkPlace");
            return (Criteria) this;
        }

        public Criteria andHiParkPlaceBetween(String value1, String value2) {
            addCriterion("hi_park_place between", value1, value2, "hiParkPlace");
            return (Criteria) this;
        }

        public Criteria andHiParkPlaceNotBetween(String value1, String value2) {
            addCriterion("hi_park_place not between", value1, value2, "hiParkPlace");
            return (Criteria) this;
        }

        public Criteria andHiPlotRatioIsNull() {
            addCriterion("hi_plot_ratio is null");
            return (Criteria) this;
        }

        public Criteria andHiPlotRatioIsNotNull() {
            addCriterion("hi_plot_ratio is not null");
            return (Criteria) this;
        }

        public Criteria andHiPlotRatioEqualTo(String value) {
            addCriterion("hi_plot_ratio =", value, "hiPlotRatio");
            return (Criteria) this;
        }

        public Criteria andHiPlotRatioNotEqualTo(String value) {
            addCriterion("hi_plot_ratio <>", value, "hiPlotRatio");
            return (Criteria) this;
        }

        public Criteria andHiPlotRatioGreaterThan(String value) {
            addCriterion("hi_plot_ratio >", value, "hiPlotRatio");
            return (Criteria) this;
        }

        public Criteria andHiPlotRatioGreaterThanOrEqualTo(String value) {
            addCriterion("hi_plot_ratio >=", value, "hiPlotRatio");
            return (Criteria) this;
        }

        public Criteria andHiPlotRatioLessThan(String value) {
            addCriterion("hi_plot_ratio <", value, "hiPlotRatio");
            return (Criteria) this;
        }

        public Criteria andHiPlotRatioLessThanOrEqualTo(String value) {
            addCriterion("hi_plot_ratio <=", value, "hiPlotRatio");
            return (Criteria) this;
        }

        public Criteria andHiPlotRatioLike(String value) {
            addCriterion("hi_plot_ratio like", value, "hiPlotRatio");
            return (Criteria) this;
        }

        public Criteria andHiPlotRatioNotLike(String value) {
            addCriterion("hi_plot_ratio not like", value, "hiPlotRatio");
            return (Criteria) this;
        }

        public Criteria andHiPlotRatioIn(List<String> values) {
            addCriterion("hi_plot_ratio in", values, "hiPlotRatio");
            return (Criteria) this;
        }

        public Criteria andHiPlotRatioNotIn(List<String> values) {
            addCriterion("hi_plot_ratio not in", values, "hiPlotRatio");
            return (Criteria) this;
        }

        public Criteria andHiPlotRatioBetween(String value1, String value2) {
            addCriterion("hi_plot_ratio between", value1, value2, "hiPlotRatio");
            return (Criteria) this;
        }

        public Criteria andHiPlotRatioNotBetween(String value1, String value2) {
            addCriterion("hi_plot_ratio not between", value1, value2, "hiPlotRatio");
            return (Criteria) this;
        }

        public Criteria andHiCategoryIsNull() {
            addCriterion("hi_category is null");
            return (Criteria) this;
        }

        public Criteria andHiCategoryIsNotNull() {
            addCriterion("hi_category is not null");
            return (Criteria) this;
        }

        public Criteria andHiCategoryEqualTo(String value) {
            addCriterion("hi_category =", value, "hiCategory");
            return (Criteria) this;
        }

        public Criteria andHiCategoryNotEqualTo(String value) {
            addCriterion("hi_category <>", value, "hiCategory");
            return (Criteria) this;
        }

        public Criteria andHiCategoryGreaterThan(String value) {
            addCriterion("hi_category >", value, "hiCategory");
            return (Criteria) this;
        }

        public Criteria andHiCategoryGreaterThanOrEqualTo(String value) {
            addCriterion("hi_category >=", value, "hiCategory");
            return (Criteria) this;
        }

        public Criteria andHiCategoryLessThan(String value) {
            addCriterion("hi_category <", value, "hiCategory");
            return (Criteria) this;
        }

        public Criteria andHiCategoryLessThanOrEqualTo(String value) {
            addCriterion("hi_category <=", value, "hiCategory");
            return (Criteria) this;
        }

        public Criteria andHiCategoryLike(String value) {
            addCriterion("hi_category like", value, "hiCategory");
            return (Criteria) this;
        }

        public Criteria andHiCategoryNotLike(String value) {
            addCriterion("hi_category not like", value, "hiCategory");
            return (Criteria) this;
        }

        public Criteria andHiCategoryIn(List<String> values) {
            addCriterion("hi_category in", values, "hiCategory");
            return (Criteria) this;
        }

        public Criteria andHiCategoryNotIn(List<String> values) {
            addCriterion("hi_category not in", values, "hiCategory");
            return (Criteria) this;
        }

        public Criteria andHiCategoryBetween(String value1, String value2) {
            addCriterion("hi_category between", value1, value2, "hiCategory");
            return (Criteria) this;
        }

        public Criteria andHiCategoryNotBetween(String value1, String value2) {
            addCriterion("hi_category not between", value1, value2, "hiCategory");
            return (Criteria) this;
        }

        public Criteria andHiYearIsNull() {
            addCriterion("hi_year is null");
            return (Criteria) this;
        }

        public Criteria andHiYearIsNotNull() {
            addCriterion("hi_year is not null");
            return (Criteria) this;
        }

        public Criteria andHiYearEqualTo(String value) {
            addCriterion("hi_year =", value, "hiYear");
            return (Criteria) this;
        }

        public Criteria andHiYearNotEqualTo(String value) {
            addCriterion("hi_year <>", value, "hiYear");
            return (Criteria) this;
        }

        public Criteria andHiYearGreaterThan(String value) {
            addCriterion("hi_year >", value, "hiYear");
            return (Criteria) this;
        }

        public Criteria andHiYearGreaterThanOrEqualTo(String value) {
            addCriterion("hi_year >=", value, "hiYear");
            return (Criteria) this;
        }

        public Criteria andHiYearLessThan(String value) {
            addCriterion("hi_year <", value, "hiYear");
            return (Criteria) this;
        }

        public Criteria andHiYearLessThanOrEqualTo(String value) {
            addCriterion("hi_year <=", value, "hiYear");
            return (Criteria) this;
        }

        public Criteria andHiYearLike(String value) {
            addCriterion("hi_year like", value, "hiYear");
            return (Criteria) this;
        }

        public Criteria andHiYearNotLike(String value) {
            addCriterion("hi_year not like", value, "hiYear");
            return (Criteria) this;
        }

        public Criteria andHiYearIn(List<String> values) {
            addCriterion("hi_year in", values, "hiYear");
            return (Criteria) this;
        }

        public Criteria andHiYearNotIn(List<String> values) {
            addCriterion("hi_year not in", values, "hiYear");
            return (Criteria) this;
        }

        public Criteria andHiYearBetween(String value1, String value2) {
            addCriterion("hi_year between", value1, value2, "hiYear");
            return (Criteria) this;
        }

        public Criteria andHiYearNotBetween(String value1, String value2) {
            addCriterion("hi_year not between", value1, value2, "hiYear");
            return (Criteria) this;
        }

        public Criteria andHiManagementFeeIsNull() {
            addCriterion("hi_management_fee is null");
            return (Criteria) this;
        }

        public Criteria andHiManagementFeeIsNotNull() {
            addCriterion("hi_management_fee is not null");
            return (Criteria) this;
        }

        public Criteria andHiManagementFeeEqualTo(String value) {
            addCriterion("hi_management_fee =", value, "hiManagementFee");
            return (Criteria) this;
        }

        public Criteria andHiManagementFeeNotEqualTo(String value) {
            addCriterion("hi_management_fee <>", value, "hiManagementFee");
            return (Criteria) this;
        }

        public Criteria andHiManagementFeeGreaterThan(String value) {
            addCriterion("hi_management_fee >", value, "hiManagementFee");
            return (Criteria) this;
        }

        public Criteria andHiManagementFeeGreaterThanOrEqualTo(String value) {
            addCriterion("hi_management_fee >=", value, "hiManagementFee");
            return (Criteria) this;
        }

        public Criteria andHiManagementFeeLessThan(String value) {
            addCriterion("hi_management_fee <", value, "hiManagementFee");
            return (Criteria) this;
        }

        public Criteria andHiManagementFeeLessThanOrEqualTo(String value) {
            addCriterion("hi_management_fee <=", value, "hiManagementFee");
            return (Criteria) this;
        }

        public Criteria andHiManagementFeeLike(String value) {
            addCriterion("hi_management_fee like", value, "hiManagementFee");
            return (Criteria) this;
        }

        public Criteria andHiManagementFeeNotLike(String value) {
            addCriterion("hi_management_fee not like", value, "hiManagementFee");
            return (Criteria) this;
        }

        public Criteria andHiManagementFeeIn(List<String> values) {
            addCriterion("hi_management_fee in", values, "hiManagementFee");
            return (Criteria) this;
        }

        public Criteria andHiManagementFeeNotIn(List<String> values) {
            addCriterion("hi_management_fee not in", values, "hiManagementFee");
            return (Criteria) this;
        }

        public Criteria andHiManagementFeeBetween(String value1, String value2) {
            addCriterion("hi_management_fee between", value1, value2, "hiManagementFee");
            return (Criteria) this;
        }

        public Criteria andHiManagementFeeNotBetween(String value1, String value2) {
            addCriterion("hi_management_fee not between", value1, value2, "hiManagementFee");
            return (Criteria) this;
        }

        public Criteria andHiConstructionRatioIsNull() {
            addCriterion("hi_construction_ratio is null");
            return (Criteria) this;
        }

        public Criteria andHiConstructionRatioIsNotNull() {
            addCriterion("hi_construction_ratio is not null");
            return (Criteria) this;
        }

        public Criteria andHiConstructionRatioEqualTo(String value) {
            addCriterion("hi_construction_ratio =", value, "hiConstructionRatio");
            return (Criteria) this;
        }

        public Criteria andHiConstructionRatioNotEqualTo(String value) {
            addCriterion("hi_construction_ratio <>", value, "hiConstructionRatio");
            return (Criteria) this;
        }

        public Criteria andHiConstructionRatioGreaterThan(String value) {
            addCriterion("hi_construction_ratio >", value, "hiConstructionRatio");
            return (Criteria) this;
        }

        public Criteria andHiConstructionRatioGreaterThanOrEqualTo(String value) {
            addCriterion("hi_construction_ratio >=", value, "hiConstructionRatio");
            return (Criteria) this;
        }

        public Criteria andHiConstructionRatioLessThan(String value) {
            addCriterion("hi_construction_ratio <", value, "hiConstructionRatio");
            return (Criteria) this;
        }

        public Criteria andHiConstructionRatioLessThanOrEqualTo(String value) {
            addCriterion("hi_construction_ratio <=", value, "hiConstructionRatio");
            return (Criteria) this;
        }

        public Criteria andHiConstructionRatioLike(String value) {
            addCriterion("hi_construction_ratio like", value, "hiConstructionRatio");
            return (Criteria) this;
        }

        public Criteria andHiConstructionRatioNotLike(String value) {
            addCriterion("hi_construction_ratio not like", value, "hiConstructionRatio");
            return (Criteria) this;
        }

        public Criteria andHiConstructionRatioIn(List<String> values) {
            addCriterion("hi_construction_ratio in", values, "hiConstructionRatio");
            return (Criteria) this;
        }

        public Criteria andHiConstructionRatioNotIn(List<String> values) {
            addCriterion("hi_construction_ratio not in", values, "hiConstructionRatio");
            return (Criteria) this;
        }

        public Criteria andHiConstructionRatioBetween(String value1, String value2) {
            addCriterion("hi_construction_ratio between", value1, value2, "hiConstructionRatio");
            return (Criteria) this;
        }

        public Criteria andHiConstructionRatioNotBetween(String value1, String value2) {
            addCriterion("hi_construction_ratio not between", value1, value2, "hiConstructionRatio");
            return (Criteria) this;
        }

        public Criteria andHiTypeIsNull() {
            addCriterion("hi_type is null");
            return (Criteria) this;
        }

        public Criteria andHiTypeIsNotNull() {
            addCriterion("hi_type is not null");
            return (Criteria) this;
        }

        public Criteria andHiTypeEqualTo(String value) {
            addCriterion("hi_type =", value, "hiType");
            return (Criteria) this;
        }

        public Criteria andHiTypeNotEqualTo(String value) {
            addCriterion("hi_type <>", value, "hiType");
            return (Criteria) this;
        }

        public Criteria andHiTypeGreaterThan(String value) {
            addCriterion("hi_type >", value, "hiType");
            return (Criteria) this;
        }

        public Criteria andHiTypeGreaterThanOrEqualTo(String value) {
            addCriterion("hi_type >=", value, "hiType");
            return (Criteria) this;
        }

        public Criteria andHiTypeLessThan(String value) {
            addCriterion("hi_type <", value, "hiType");
            return (Criteria) this;
        }

        public Criteria andHiTypeLessThanOrEqualTo(String value) {
            addCriterion("hi_type <=", value, "hiType");
            return (Criteria) this;
        }

        public Criteria andHiTypeLike(String value) {
            addCriterion("hi_type like", value, "hiType");
            return (Criteria) this;
        }

        public Criteria andHiTypeNotLike(String value) {
            addCriterion("hi_type not like", value, "hiType");
            return (Criteria) this;
        }

        public Criteria andHiTypeIn(List<String> values) {
            addCriterion("hi_type in", values, "hiType");
            return (Criteria) this;
        }

        public Criteria andHiTypeNotIn(List<String> values) {
            addCriterion("hi_type not in", values, "hiType");
            return (Criteria) this;
        }

        public Criteria andHiTypeBetween(String value1, String value2) {
            addCriterion("hi_type between", value1, value2, "hiType");
            return (Criteria) this;
        }

        public Criteria andHiTypeNotBetween(String value1, String value2) {
            addCriterion("hi_type not between", value1, value2, "hiType");
            return (Criteria) this;
        }

        public Criteria andHiAcreageIsNull() {
            addCriterion("hi_acreage is null");
            return (Criteria) this;
        }

        public Criteria andHiAcreageIsNotNull() {
            addCriterion("hi_acreage is not null");
            return (Criteria) this;
        }

        public Criteria andHiAcreageEqualTo(String value) {
            addCriterion("hi_acreage =", value, "hiAcreage");
            return (Criteria) this;
        }

        public Criteria andHiAcreageNotEqualTo(String value) {
            addCriterion("hi_acreage <>", value, "hiAcreage");
            return (Criteria) this;
        }

        public Criteria andHiAcreageGreaterThan(String value) {
            addCriterion("hi_acreage >", value, "hiAcreage");
            return (Criteria) this;
        }

        public Criteria andHiAcreageGreaterThanOrEqualTo(String value) {
            addCriterion("hi_acreage >=", value, "hiAcreage");
            return (Criteria) this;
        }

        public Criteria andHiAcreageLessThan(String value) {
            addCriterion("hi_acreage <", value, "hiAcreage");
            return (Criteria) this;
        }

        public Criteria andHiAcreageLessThanOrEqualTo(String value) {
            addCriterion("hi_acreage <=", value, "hiAcreage");
            return (Criteria) this;
        }

        public Criteria andHiAcreageLike(String value) {
            addCriterion("hi_acreage like", value, "hiAcreage");
            return (Criteria) this;
        }

        public Criteria andHiAcreageNotLike(String value) {
            addCriterion("hi_acreage not like", value, "hiAcreage");
            return (Criteria) this;
        }

        public Criteria andHiAcreageIn(List<String> values) {
            addCriterion("hi_acreage in", values, "hiAcreage");
            return (Criteria) this;
        }

        public Criteria andHiAcreageNotIn(List<String> values) {
            addCriterion("hi_acreage not in", values, "hiAcreage");
            return (Criteria) this;
        }

        public Criteria andHiAcreageBetween(String value1, String value2) {
            addCriterion("hi_acreage between", value1, value2, "hiAcreage");
            return (Criteria) this;
        }

        public Criteria andHiAcreageNotBetween(String value1, String value2) {
            addCriterion("hi_acreage not between", value1, value2, "hiAcreage");
            return (Criteria) this;
        }

        public Criteria andHiDeliveryTimeIsNull() {
            addCriterion("hi_delivery_time is null");
            return (Criteria) this;
        }

        public Criteria andHiDeliveryTimeIsNotNull() {
            addCriterion("hi_delivery_time is not null");
            return (Criteria) this;
        }

        public Criteria andHiDeliveryTimeEqualTo(String value) {
            addCriterion("hi_delivery_time =", value, "hiDeliveryTime");
            return (Criteria) this;
        }

        public Criteria andHiDeliveryTimeNotEqualTo(String value) {
            addCriterion("hi_delivery_time <>", value, "hiDeliveryTime");
            return (Criteria) this;
        }

        public Criteria andHiDeliveryTimeGreaterThan(String value) {
            addCriterion("hi_delivery_time >", value, "hiDeliveryTime");
            return (Criteria) this;
        }

        public Criteria andHiDeliveryTimeGreaterThanOrEqualTo(String value) {
            addCriterion("hi_delivery_time >=", value, "hiDeliveryTime");
            return (Criteria) this;
        }

        public Criteria andHiDeliveryTimeLessThan(String value) {
            addCriterion("hi_delivery_time <", value, "hiDeliveryTime");
            return (Criteria) this;
        }

        public Criteria andHiDeliveryTimeLessThanOrEqualTo(String value) {
            addCriterion("hi_delivery_time <=", value, "hiDeliveryTime");
            return (Criteria) this;
        }

        public Criteria andHiDeliveryTimeLike(String value) {
            addCriterion("hi_delivery_time like", value, "hiDeliveryTime");
            return (Criteria) this;
        }

        public Criteria andHiDeliveryTimeNotLike(String value) {
            addCriterion("hi_delivery_time not like", value, "hiDeliveryTime");
            return (Criteria) this;
        }

        public Criteria andHiDeliveryTimeIn(List<String> values) {
            addCriterion("hi_delivery_time in", values, "hiDeliveryTime");
            return (Criteria) this;
        }

        public Criteria andHiDeliveryTimeNotIn(List<String> values) {
            addCriterion("hi_delivery_time not in", values, "hiDeliveryTime");
            return (Criteria) this;
        }

        public Criteria andHiDeliveryTimeBetween(String value1, String value2) {
            addCriterion("hi_delivery_time between", value1, value2, "hiDeliveryTime");
            return (Criteria) this;
        }

        public Criteria andHiDeliveryTimeNotBetween(String value1, String value2) {
            addCriterion("hi_delivery_time not between", value1, value2, "hiDeliveryTime");
            return (Criteria) this;
        }

        public Criteria andHiDeveloperIsNull() {
            addCriterion("hi_developer is null");
            return (Criteria) this;
        }

        public Criteria andHiDeveloperIsNotNull() {
            addCriterion("hi_developer is not null");
            return (Criteria) this;
        }

        public Criteria andHiDeveloperEqualTo(String value) {
            addCriterion("hi_developer =", value, "hiDeveloper");
            return (Criteria) this;
        }

        public Criteria andHiDeveloperNotEqualTo(String value) {
            addCriterion("hi_developer <>", value, "hiDeveloper");
            return (Criteria) this;
        }

        public Criteria andHiDeveloperGreaterThan(String value) {
            addCriterion("hi_developer >", value, "hiDeveloper");
            return (Criteria) this;
        }

        public Criteria andHiDeveloperGreaterThanOrEqualTo(String value) {
            addCriterion("hi_developer >=", value, "hiDeveloper");
            return (Criteria) this;
        }

        public Criteria andHiDeveloperLessThan(String value) {
            addCriterion("hi_developer <", value, "hiDeveloper");
            return (Criteria) this;
        }

        public Criteria andHiDeveloperLessThanOrEqualTo(String value) {
            addCriterion("hi_developer <=", value, "hiDeveloper");
            return (Criteria) this;
        }

        public Criteria andHiDeveloperLike(String value) {
            addCriterion("hi_developer like", value, "hiDeveloper");
            return (Criteria) this;
        }

        public Criteria andHiDeveloperNotLike(String value) {
            addCriterion("hi_developer not like", value, "hiDeveloper");
            return (Criteria) this;
        }

        public Criteria andHiDeveloperIn(List<String> values) {
            addCriterion("hi_developer in", values, "hiDeveloper");
            return (Criteria) this;
        }

        public Criteria andHiDeveloperNotIn(List<String> values) {
            addCriterion("hi_developer not in", values, "hiDeveloper");
            return (Criteria) this;
        }

        public Criteria andHiDeveloperBetween(String value1, String value2) {
            addCriterion("hi_developer between", value1, value2, "hiDeveloper");
            return (Criteria) this;
        }

        public Criteria andHiDeveloperNotBetween(String value1, String value2) {
            addCriterion("hi_developer not between", value1, value2, "hiDeveloper");
            return (Criteria) this;
        }

        public Criteria andHiShowPicIsNull() {
            addCriterion("hi_show_pic is null");
            return (Criteria) this;
        }

        public Criteria andHiShowPicIsNotNull() {
            addCriterion("hi_show_pic is not null");
            return (Criteria) this;
        }

        public Criteria andHiShowPicEqualTo(String value) {
            addCriterion("hi_show_pic =", value, "hiShowPic");
            return (Criteria) this;
        }

        public Criteria andHiShowPicNotEqualTo(String value) {
            addCriterion("hi_show_pic <>", value, "hiShowPic");
            return (Criteria) this;
        }

        public Criteria andHiShowPicGreaterThan(String value) {
            addCriterion("hi_show_pic >", value, "hiShowPic");
            return (Criteria) this;
        }

        public Criteria andHiShowPicGreaterThanOrEqualTo(String value) {
            addCriterion("hi_show_pic >=", value, "hiShowPic");
            return (Criteria) this;
        }

        public Criteria andHiShowPicLessThan(String value) {
            addCriterion("hi_show_pic <", value, "hiShowPic");
            return (Criteria) this;
        }

        public Criteria andHiShowPicLessThanOrEqualTo(String value) {
            addCriterion("hi_show_pic <=", value, "hiShowPic");
            return (Criteria) this;
        }

        public Criteria andHiShowPicLike(String value) {
            addCriterion("hi_show_pic like", value, "hiShowPic");
            return (Criteria) this;
        }

        public Criteria andHiShowPicNotLike(String value) {
            addCriterion("hi_show_pic not like", value, "hiShowPic");
            return (Criteria) this;
        }

        public Criteria andHiShowPicIn(List<String> values) {
            addCriterion("hi_show_pic in", values, "hiShowPic");
            return (Criteria) this;
        }

        public Criteria andHiShowPicNotIn(List<String> values) {
            addCriterion("hi_show_pic not in", values, "hiShowPic");
            return (Criteria) this;
        }

        public Criteria andHiShowPicBetween(String value1, String value2) {
            addCriterion("hi_show_pic between", value1, value2, "hiShowPic");
            return (Criteria) this;
        }

        public Criteria andHiShowPicNotBetween(String value1, String value2) {
            addCriterion("hi_show_pic not between", value1, value2, "hiShowPic");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityPicIsNull() {
            addCriterion("hi_superiority_pic is null");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityPicIsNotNull() {
            addCriterion("hi_superiority_pic is not null");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityPicEqualTo(String value) {
            addCriterion("hi_superiority_pic =", value, "hiSuperiorityPic");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityPicNotEqualTo(String value) {
            addCriterion("hi_superiority_pic <>", value, "hiSuperiorityPic");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityPicGreaterThan(String value) {
            addCriterion("hi_superiority_pic >", value, "hiSuperiorityPic");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityPicGreaterThanOrEqualTo(String value) {
            addCriterion("hi_superiority_pic >=", value, "hiSuperiorityPic");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityPicLessThan(String value) {
            addCriterion("hi_superiority_pic <", value, "hiSuperiorityPic");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityPicLessThanOrEqualTo(String value) {
            addCriterion("hi_superiority_pic <=", value, "hiSuperiorityPic");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityPicLike(String value) {
            addCriterion("hi_superiority_pic like", value, "hiSuperiorityPic");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityPicNotLike(String value) {
            addCriterion("hi_superiority_pic not like", value, "hiSuperiorityPic");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityPicIn(List<String> values) {
            addCriterion("hi_superiority_pic in", values, "hiSuperiorityPic");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityPicNotIn(List<String> values) {
            addCriterion("hi_superiority_pic not in", values, "hiSuperiorityPic");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityPicBetween(String value1, String value2) {
            addCriterion("hi_superiority_pic between", value1, value2, "hiSuperiorityPic");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityPicNotBetween(String value1, String value2) {
            addCriterion("hi_superiority_pic not between", value1, value2, "hiSuperiorityPic");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityDescIsNull() {
            addCriterion("hi_superiority_desc is null");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityDescIsNotNull() {
            addCriterion("hi_superiority_desc is not null");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityDescEqualTo(String value) {
            addCriterion("hi_superiority_desc =", value, "hiSuperiorityDesc");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityDescNotEqualTo(String value) {
            addCriterion("hi_superiority_desc <>", value, "hiSuperiorityDesc");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityDescGreaterThan(String value) {
            addCriterion("hi_superiority_desc >", value, "hiSuperiorityDesc");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityDescGreaterThanOrEqualTo(String value) {
            addCriterion("hi_superiority_desc >=", value, "hiSuperiorityDesc");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityDescLessThan(String value) {
            addCriterion("hi_superiority_desc <", value, "hiSuperiorityDesc");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityDescLessThanOrEqualTo(String value) {
            addCriterion("hi_superiority_desc <=", value, "hiSuperiorityDesc");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityDescLike(String value) {
            addCriterion("hi_superiority_desc like", value, "hiSuperiorityDesc");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityDescNotLike(String value) {
            addCriterion("hi_superiority_desc not like", value, "hiSuperiorityDesc");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityDescIn(List<String> values) {
            addCriterion("hi_superiority_desc in", values, "hiSuperiorityDesc");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityDescNotIn(List<String> values) {
            addCriterion("hi_superiority_desc not in", values, "hiSuperiorityDesc");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityDescBetween(String value1, String value2) {
            addCriterion("hi_superiority_desc between", value1, value2, "hiSuperiorityDesc");
            return (Criteria) this;
        }

        public Criteria andHiSuperiorityDescNotBetween(String value1, String value2) {
            addCriterion("hi_superiority_desc not between", value1, value2, "hiSuperiorityDesc");
            return (Criteria) this;
        }

        public Criteria andHiHouseTypePicIsNull() {
            addCriterion("hi_house_type_pic is null");
            return (Criteria) this;
        }

        public Criteria andHiHouseTypePicIsNotNull() {
            addCriterion("hi_house_type_pic is not null");
            return (Criteria) this;
        }

        public Criteria andHiHouseTypePicEqualTo(String value) {
            addCriterion("hi_house_type_pic =", value, "hiHouseTypePic");
            return (Criteria) this;
        }

        public Criteria andHiHouseTypePicNotEqualTo(String value) {
            addCriterion("hi_house_type_pic <>", value, "hiHouseTypePic");
            return (Criteria) this;
        }

        public Criteria andHiHouseTypePicGreaterThan(String value) {
            addCriterion("hi_house_type_pic >", value, "hiHouseTypePic");
            return (Criteria) this;
        }

        public Criteria andHiHouseTypePicGreaterThanOrEqualTo(String value) {
            addCriterion("hi_house_type_pic >=", value, "hiHouseTypePic");
            return (Criteria) this;
        }

        public Criteria andHiHouseTypePicLessThan(String value) {
            addCriterion("hi_house_type_pic <", value, "hiHouseTypePic");
            return (Criteria) this;
        }

        public Criteria andHiHouseTypePicLessThanOrEqualTo(String value) {
            addCriterion("hi_house_type_pic <=", value, "hiHouseTypePic");
            return (Criteria) this;
        }

        public Criteria andHiHouseTypePicLike(String value) {
            addCriterion("hi_house_type_pic like", value, "hiHouseTypePic");
            return (Criteria) this;
        }

        public Criteria andHiHouseTypePicNotLike(String value) {
            addCriterion("hi_house_type_pic not like", value, "hiHouseTypePic");
            return (Criteria) this;
        }

        public Criteria andHiHouseTypePicIn(List<String> values) {
            addCriterion("hi_house_type_pic in", values, "hiHouseTypePic");
            return (Criteria) this;
        }

        public Criteria andHiHouseTypePicNotIn(List<String> values) {
            addCriterion("hi_house_type_pic not in", values, "hiHouseTypePic");
            return (Criteria) this;
        }

        public Criteria andHiHouseTypePicBetween(String value1, String value2) {
            addCriterion("hi_house_type_pic between", value1, value2, "hiHouseTypePic");
            return (Criteria) this;
        }

        public Criteria andHiHouseTypePicNotBetween(String value1, String value2) {
            addCriterion("hi_house_type_pic not between", value1, value2, "hiHouseTypePic");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingPicIsNull() {
            addCriterion("hi_peripheral_matching_pic is null");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingPicIsNotNull() {
            addCriterion("hi_peripheral_matching_pic is not null");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingPicEqualTo(String value) {
            addCriterion("hi_peripheral_matching_pic =", value, "hiPeripheralMatchingPic");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingPicNotEqualTo(String value) {
            addCriterion("hi_peripheral_matching_pic <>", value, "hiPeripheralMatchingPic");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingPicGreaterThan(String value) {
            addCriterion("hi_peripheral_matching_pic >", value, "hiPeripheralMatchingPic");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingPicGreaterThanOrEqualTo(String value) {
            addCriterion("hi_peripheral_matching_pic >=", value, "hiPeripheralMatchingPic");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingPicLessThan(String value) {
            addCriterion("hi_peripheral_matching_pic <", value, "hiPeripheralMatchingPic");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingPicLessThanOrEqualTo(String value) {
            addCriterion("hi_peripheral_matching_pic <=", value, "hiPeripheralMatchingPic");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingPicLike(String value) {
            addCriterion("hi_peripheral_matching_pic like", value, "hiPeripheralMatchingPic");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingPicNotLike(String value) {
            addCriterion("hi_peripheral_matching_pic not like", value, "hiPeripheralMatchingPic");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingPicIn(List<String> values) {
            addCriterion("hi_peripheral_matching_pic in", values, "hiPeripheralMatchingPic");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingPicNotIn(List<String> values) {
            addCriterion("hi_peripheral_matching_pic not in", values, "hiPeripheralMatchingPic");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingPicBetween(String value1, String value2) {
            addCriterion("hi_peripheral_matching_pic between", value1, value2, "hiPeripheralMatchingPic");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingPicNotBetween(String value1, String value2) {
            addCriterion("hi_peripheral_matching_pic not between", value1, value2, "hiPeripheralMatchingPic");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingDescIsNull() {
            addCriterion("hi_peripheral_matching_desc is null");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingDescIsNotNull() {
            addCriterion("hi_peripheral_matching_desc is not null");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingDescEqualTo(String value) {
            addCriterion("hi_peripheral_matching_desc =", value, "hiPeripheralMatchingDesc");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingDescNotEqualTo(String value) {
            addCriterion("hi_peripheral_matching_desc <>", value, "hiPeripheralMatchingDesc");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingDescGreaterThan(String value) {
            addCriterion("hi_peripheral_matching_desc >", value, "hiPeripheralMatchingDesc");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingDescGreaterThanOrEqualTo(String value) {
            addCriterion("hi_peripheral_matching_desc >=", value, "hiPeripheralMatchingDesc");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingDescLessThan(String value) {
            addCriterion("hi_peripheral_matching_desc <", value, "hiPeripheralMatchingDesc");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingDescLessThanOrEqualTo(String value) {
            addCriterion("hi_peripheral_matching_desc <=", value, "hiPeripheralMatchingDesc");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingDescLike(String value) {
            addCriterion("hi_peripheral_matching_desc like", value, "hiPeripheralMatchingDesc");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingDescNotLike(String value) {
            addCriterion("hi_peripheral_matching_desc not like", value, "hiPeripheralMatchingDesc");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingDescIn(List<String> values) {
            addCriterion("hi_peripheral_matching_desc in", values, "hiPeripheralMatchingDesc");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingDescNotIn(List<String> values) {
            addCriterion("hi_peripheral_matching_desc not in", values, "hiPeripheralMatchingDesc");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingDescBetween(String value1, String value2) {
            addCriterion("hi_peripheral_matching_desc between", value1, value2, "hiPeripheralMatchingDesc");
            return (Criteria) this;
        }

        public Criteria andHiPeripheralMatchingDescNotBetween(String value1, String value2) {
            addCriterion("hi_peripheral_matching_desc not between", value1, value2, "hiPeripheralMatchingDesc");
            return (Criteria) this;
        }

        public Criteria andHiReminderContentIsNull() {
            addCriterion("hi_reminder_content is null");
            return (Criteria) this;
        }

        public Criteria andHiReminderContentIsNotNull() {
            addCriterion("hi_reminder_content is not null");
            return (Criteria) this;
        }

        public Criteria andHiReminderContentEqualTo(String value) {
            addCriterion("hi_reminder_content =", value, "hiReminderContent");
            return (Criteria) this;
        }

        public Criteria andHiReminderContentNotEqualTo(String value) {
            addCriterion("hi_reminder_content <>", value, "hiReminderContent");
            return (Criteria) this;
        }

        public Criteria andHiReminderContentGreaterThan(String value) {
            addCriterion("hi_reminder_content >", value, "hiReminderContent");
            return (Criteria) this;
        }

        public Criteria andHiReminderContentGreaterThanOrEqualTo(String value) {
            addCriterion("hi_reminder_content >=", value, "hiReminderContent");
            return (Criteria) this;
        }

        public Criteria andHiReminderContentLessThan(String value) {
            addCriterion("hi_reminder_content <", value, "hiReminderContent");
            return (Criteria) this;
        }

        public Criteria andHiReminderContentLessThanOrEqualTo(String value) {
            addCriterion("hi_reminder_content <=", value, "hiReminderContent");
            return (Criteria) this;
        }

        public Criteria andHiReminderContentLike(String value) {
            addCriterion("hi_reminder_content like", value, "hiReminderContent");
            return (Criteria) this;
        }

        public Criteria andHiReminderContentNotLike(String value) {
            addCriterion("hi_reminder_content not like", value, "hiReminderContent");
            return (Criteria) this;
        }

        public Criteria andHiReminderContentIn(List<String> values) {
            addCriterion("hi_reminder_content in", values, "hiReminderContent");
            return (Criteria) this;
        }

        public Criteria andHiReminderContentNotIn(List<String> values) {
            addCriterion("hi_reminder_content not in", values, "hiReminderContent");
            return (Criteria) this;
        }

        public Criteria andHiReminderContentBetween(String value1, String value2) {
            addCriterion("hi_reminder_content between", value1, value2, "hiReminderContent");
            return (Criteria) this;
        }

        public Criteria andHiReminderContentNotBetween(String value1, String value2) {
            addCriterion("hi_reminder_content not between", value1, value2, "hiReminderContent");
            return (Criteria) this;
        }

        public Criteria andHiHotLineIsNull() {
            addCriterion("hi_hot_line is null");
            return (Criteria) this;
        }

        public Criteria andHiHotLineIsNotNull() {
            addCriterion("hi_hot_line is not null");
            return (Criteria) this;
        }

        public Criteria andHiHotLineEqualTo(String value) {
            addCriterion("hi_hot_line =", value, "hiHotLine");
            return (Criteria) this;
        }

        public Criteria andHiHotLineNotEqualTo(String value) {
            addCriterion("hi_hot_line <>", value, "hiHotLine");
            return (Criteria) this;
        }

        public Criteria andHiHotLineGreaterThan(String value) {
            addCriterion("hi_hot_line >", value, "hiHotLine");
            return (Criteria) this;
        }

        public Criteria andHiHotLineGreaterThanOrEqualTo(String value) {
            addCriterion("hi_hot_line >=", value, "hiHotLine");
            return (Criteria) this;
        }

        public Criteria andHiHotLineLessThan(String value) {
            addCriterion("hi_hot_line <", value, "hiHotLine");
            return (Criteria) this;
        }

        public Criteria andHiHotLineLessThanOrEqualTo(String value) {
            addCriterion("hi_hot_line <=", value, "hiHotLine");
            return (Criteria) this;
        }

        public Criteria andHiHotLineLike(String value) {
            addCriterion("hi_hot_line like", value, "hiHotLine");
            return (Criteria) this;
        }

        public Criteria andHiHotLineNotLike(String value) {
            addCriterion("hi_hot_line not like", value, "hiHotLine");
            return (Criteria) this;
        }

        public Criteria andHiHotLineIn(List<String> values) {
            addCriterion("hi_hot_line in", values, "hiHotLine");
            return (Criteria) this;
        }

        public Criteria andHiHotLineNotIn(List<String> values) {
            addCriterion("hi_hot_line not in", values, "hiHotLine");
            return (Criteria) this;
        }

        public Criteria andHiHotLineBetween(String value1, String value2) {
            addCriterion("hi_hot_line between", value1, value2, "hiHotLine");
            return (Criteria) this;
        }

        public Criteria andHiHotLineNotBetween(String value1, String value2) {
            addCriterion("hi_hot_line not between", value1, value2, "hiHotLine");
            return (Criteria) this;
        }

        public Criteria andHiStatusIsNull() {
            addCriterion("hi_status is null");
            return (Criteria) this;
        }

        public Criteria andHiStatusIsNotNull() {
            addCriterion("hi_status is not null");
            return (Criteria) this;
        }

        public Criteria andHiStatusEqualTo(Integer value) {
            addCriterion("hi_status =", value, "hiStatus");
            return (Criteria) this;
        }

        public Criteria andHiStatusNotEqualTo(Integer value) {
            addCriterion("hi_status <>", value, "hiStatus");
            return (Criteria) this;
        }

        public Criteria andHiStatusGreaterThan(Integer value) {
            addCriterion("hi_status >", value, "hiStatus");
            return (Criteria) this;
        }

        public Criteria andHiStatusGreaterThanOrEqualTo(Integer value) {
            addCriterion("hi_status >=", value, "hiStatus");
            return (Criteria) this;
        }

        public Criteria andHiStatusLessThan(Integer value) {
            addCriterion("hi_status <", value, "hiStatus");
            return (Criteria) this;
        }

        public Criteria andHiStatusLessThanOrEqualTo(Integer value) {
            addCriterion("hi_status <=", value, "hiStatus");
            return (Criteria) this;
        }

        public Criteria andHiStatusIn(List<Integer> values) {
            addCriterion("hi_status in", values, "hiStatus");
            return (Criteria) this;
        }

        public Criteria andHiStatusNotIn(List<Integer> values) {
            addCriterion("hi_status not in", values, "hiStatus");
            return (Criteria) this;
        }

        public Criteria andHiStatusBetween(Integer value1, Integer value2) {
            addCriterion("hi_status between", value1, value2, "hiStatus");
            return (Criteria) this;
        }

        public Criteria andHiStatusNotBetween(Integer value1, Integer value2) {
            addCriterion("hi_status not between", value1, value2, "hiStatus");
            return (Criteria) this;
        }

        public Criteria andHiUpdateDateIsNull() {
            addCriterion("hi_update_date is null");
            return (Criteria) this;
        }

        public Criteria andHiUpdateDateIsNotNull() {
            addCriterion("hi_update_date is not null");
            return (Criteria) this;
        }

        public Criteria andHiUpdateDateEqualTo(Date value) {
            addCriterion("hi_update_date =", value, "hiUpdateDate");
            return (Criteria) this;
        }

        public Criteria andHiUpdateDateNotEqualTo(Date value) {
            addCriterion("hi_update_date <>", value, "hiUpdateDate");
            return (Criteria) this;
        }

        public Criteria andHiUpdateDateGreaterThan(Date value) {
            addCriterion("hi_update_date >", value, "hiUpdateDate");
            return (Criteria) this;
        }

        public Criteria andHiUpdateDateGreaterThanOrEqualTo(Date value) {
            addCriterion("hi_update_date >=", value, "hiUpdateDate");
            return (Criteria) this;
        }

        public Criteria andHiUpdateDateLessThan(Date value) {
            addCriterion("hi_update_date <", value, "hiUpdateDate");
            return (Criteria) this;
        }

        public Criteria andHiUpdateDateLessThanOrEqualTo(Date value) {
            addCriterion("hi_update_date <=", value, "hiUpdateDate");
            return (Criteria) this;
        }

        public Criteria andHiUpdateDateIn(List<Date> values) {
            addCriterion("hi_update_date in", values, "hiUpdateDate");
            return (Criteria) this;
        }

        public Criteria andHiUpdateDateNotIn(List<Date> values) {
            addCriterion("hi_update_date not in", values, "hiUpdateDate");
            return (Criteria) this;
        }

        public Criteria andHiUpdateDateBetween(Date value1, Date value2) {
            addCriterion("hi_update_date between", value1, value2, "hiUpdateDate");
            return (Criteria) this;
        }

        public Criteria andHiUpdateDateNotBetween(Date value1, Date value2) {
            addCriterion("hi_update_date not between", value1, value2, "hiUpdateDate");
            return (Criteria) this;
        }

        public Criteria andHiCreateDateIsNull() {
            addCriterion("hi_create_date is null");
            return (Criteria) this;
        }

        public Criteria andHiCreateDateIsNotNull() {
            addCriterion("hi_create_date is not null");
            return (Criteria) this;
        }

        public Criteria andHiCreateDateEqualTo(Date value) {
            addCriterion("hi_create_date =", value, "hiCreateDate");
            return (Criteria) this;
        }

        public Criteria andHiCreateDateNotEqualTo(Date value) {
            addCriterion("hi_create_date <>", value, "hiCreateDate");
            return (Criteria) this;
        }

        public Criteria andHiCreateDateGreaterThan(Date value) {
            addCriterion("hi_create_date >", value, "hiCreateDate");
            return (Criteria) this;
        }

        public Criteria andHiCreateDateGreaterThanOrEqualTo(Date value) {
            addCriterion("hi_create_date >=", value, "hiCreateDate");
            return (Criteria) this;
        }

        public Criteria andHiCreateDateLessThan(Date value) {
            addCriterion("hi_create_date <", value, "hiCreateDate");
            return (Criteria) this;
        }

        public Criteria andHiCreateDateLessThanOrEqualTo(Date value) {
            addCriterion("hi_create_date <=", value, "hiCreateDate");
            return (Criteria) this;
        }

        public Criteria andHiCreateDateIn(List<Date> values) {
            addCriterion("hi_create_date in", values, "hiCreateDate");
            return (Criteria) this;
        }

        public Criteria andHiCreateDateNotIn(List<Date> values) {
            addCriterion("hi_create_date not in", values, "hiCreateDate");
            return (Criteria) this;
        }

        public Criteria andHiCreateDateBetween(Date value1, Date value2) {
            addCriterion("hi_create_date between", value1, value2, "hiCreateDate");
            return (Criteria) this;
        }

        public Criteria andHiCreateDateNotBetween(Date value1, Date value2) {
            addCriterion("hi_create_date not between", value1, value2, "hiCreateDate");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}