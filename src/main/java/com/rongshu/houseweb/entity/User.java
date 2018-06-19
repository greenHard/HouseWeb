package com.rongshu.houseweb.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * 用户类
 */
@Data
public class User implements Serializable{

    private Long id;

    private String username;

    private String password;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
