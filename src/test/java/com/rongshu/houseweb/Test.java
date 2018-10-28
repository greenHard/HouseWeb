package com.rongshu.houseweb;

import java.util.Arrays;

public class Test {

    @org.junit.Test
    public void test01(){
        String str = "111111111111||222222222222";
        String[] split = str.split("\\|\\|");
        System.out.println(Arrays.toString(split));
    }
}
