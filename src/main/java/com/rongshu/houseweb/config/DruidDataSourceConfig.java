package com.rongshu.houseweb.config;

import com.alibaba.druid.pool.DruidDataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;
import java.sql.SQLException;


/**
 * Spring Boot 和阿里云的druid连接池有兼容性问题
 * 这里通过手动写类进行初始化
 *
 * @author zhang yuyang
 */
@Configuration
@ConfigurationProperties(prefix = "spring.datasource")
public class DruidDataSourceConfig {
    private static final Logger logger = LoggerFactory.getLogger(DruidDataSourceConfig.class);

    private String type;
    private String url;
    private String driverClassName;
    private String username;
    private String password;
    private String filters;
    private String connectionProperties;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDriverClassName() {
        return driverClassName;
    }

    public void setDriverClassName(String driverClassName) {
        this.driverClassName = driverClassName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFilters() {
        return filters;
    }

    public void setFilters(String filters) {
        this.filters = filters;
    }

    public String getConnectionProperties() {
        return connectionProperties;
    }

    public void setConnectionProperties(String connectionProperties) {
        this.connectionProperties = connectionProperties;
    }

    /**
     * {@link Primary}
     * 构造{@link DataSource}
     */
    @Bean
    @Primary
    public DataSource druidDataSource() {
        DruidDataSource dataSource = new DruidDataSource();
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        dataSource.setDriverClassName(driverClassName);
        dataSource.setConnectionProperties(connectionProperties);
        try {
            dataSource.setFilters(filters);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        logger.info(">>>>>>>>>>>>>>>>>>>>>>Druid DataSource init>>>>>>>>>>>");
        return dataSource;

    }
}

