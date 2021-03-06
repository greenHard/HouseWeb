
DROP TABLE IF EXISTS house_info;

CREATE TABLE house_info  (
  id bigint(20) NOT NULL AUTO_INCREMENT COMMENT '楼盘id',
  hi_name varchar(200)  COMMENT '楼盘名称',
  hi_avg_price varchar(200)  COMMENT '楼盘均价',
  hi_attache varchar(200)  COMMENT '楼盘联排',
  hi_afforestation varchar(200)  COMMENT '楼盘绿化',
  hi_decorate varchar(200)  COMMENT '楼盘装修',
  hi_park_place varchar(200)  COMMENT '楼盘车位',
  hi_address varchar(200)  COMMENT '楼盘位置',
  hi_plot_ratio varchar(200)  COMMENT '楼盘容积率',
  hi_category varchar(200)  COMMENT '楼盘物业类别',
  hi_down_payment varchar(200)  COMMENT '首付',
  hi_open_time  varchar(200)  COMMENT '开盘时间',
  hi_year varchar(200)  COMMENT '楼盘产权年限',
  hi_management_fee varchar(200)  COMMENT '楼盘物业费',
  hi_construction_ratio varchar(200)  COMMENT '楼盘得房率',
  hi_type varchar(200)  COMMENT '楼盘建筑类型',
  hi_acreage varchar(200)  COMMENT '楼盘建筑面积',
  hi_delivery_time varchar(200)  COMMENT '楼盘交房时间',
  hi_developer varchar(200)  COMMENT '楼盘开发商',
  hi_logo varchar(1000)  COMMENT '楼盘logo',
  hi_show_pic varchar(1000)  COMMENT '楼盘展示图片',
  hi_project_features_pic varchar(1000)  COMMENT '项目特色图片',
  hi_project_features_desc varchar(1000)  COMMENT '项目特色描述',
  hi_superiority_pic varchar(1000)  COMMENT '楼盘优势图片',
  hi_superiority_desc varchar(1000)  COMMENT '楼盘优势描述',
  hi_regional_significance_pic varchar(1000)  COMMENT '区域显著图片',
  hi_regional_significance_desc varchar(1000)  COMMENT '区域显著描述',
  hi_peripheral_matching_pic varchar(1000)  COMMENT '楼盘周边配图片',
  hi_peripheral_matching_desc varchar(1000)  COMMENT '楼盘周边配描述',
  hi_house_type_pic varchar(1000)  COMMENT '楼盘户型图片',
  hi_model_houses_pic varchar(1000)  COMMENT '样板房图片',
  hi_model_houses_desc varchar(1000)  COMMENT '样板房描述',
  hi_reminder_content varchar(1000)  COMMENT '楼盘温馨提示',
  hi_hot_line varchar(1000)  COMMENT '楼盘热线',
  hi_status int(1) COMMENT '楼盘状态 默认值为1，可选值：1正常，2下架，3删除',
  hi_update_date timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  hi_create_date datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (id)
);



CREATE TABLE new_house_info  (
  ID bigint(20) NOT NULL AUTO_INCREMENT,
  hi_name varchar(200)  COMMENT '楼盘名称',
  hi_desc varchar(500)  COMMENT '楼盘简述',
  hi_logo varchar(200)  COMMENT '楼盘logo',
  hi_superiority_pic varchar(1000)  COMMENT '项目描述图片',
  hi_superiority_desc varchar(1000)  COMMENT '项目描述简介',
  hi_surrounding_enviroment_pic varchar(1000)  COMMENT '周边环境图片',
  hi_surrounding_enviroment_desc varchar(1000)  COMMENT '周边环境描述',
  hi_traffic_programme_pic varchar(1000)  COMMENT '交通规划图片',
  hi_traffic_programme_desc varchar(1000)  COMMENT '交通规划描述',
  hi_example_house_type_pic varchar(1000)  COMMENT '样板户型图片',
  hi_example_house_type_desc varchar(1000)  COMMENT '样板户型描述',
  hi_investment_potential_logo varchar(1000)  COMMENT '投资潜力logo',
  hi_investment_potential_title varchar(1000)  COMMENT '投资潜力标题',
  hi_investment_potential_desc varchar(1000)  COMMENT '投资潜力描述',
  hi_interval_pic varchar(200)  COMMENT '间隔图片',
  hi_hot_line varchar(200)  COMMENT '楼盘热线',
  hi_status int(1) COMMENT '楼盘状态 默认值为1，可选值：1正常，2下架，3删除',
  hi_update_date timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  hi_create_date datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (ID)
) ;

CREATE TABLE hi_user_require  (
  ID bigint(20) NOT NULL AUTO_INCREMENT,
  hi_require_house_type varchar(200)  COMMENT '所需户型',
  hi_from_house_name varchar(200)  COMMENT '来自楼盘名称',
  mobile_number varchar(200)  COMMENT '用户手机号',
  hi_update_date timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  hi_create_date datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (ID)
) ;



