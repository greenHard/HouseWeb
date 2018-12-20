package com.rongshu.houseweb.util;

import org.apache.shiro.crypto.hash.Md5Hash;

import java.util.Optional;


public class MD5Util {

    private MD5Util() {
    }

    public static String getMd5Hash(String userName, String password) {

        Md5Hash md5Hash = new Md5Hash(password, userName, 3);
        return md5Hash.toString();
    }

    public static void main(String[] args) {
        Optional.of(MD5Util.getMd5Hash("admin", "123456")).ifPresent(System.out::println);
    }
}
