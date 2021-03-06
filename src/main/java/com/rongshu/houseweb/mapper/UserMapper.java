package com.rongshu.houseweb.mapper;

import com.rongshu.houseweb.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {

	/**
	 * 通过用户名和密码查询用户
	 * @param userName 用户名
	 * @param password 密码
	 * @return 用户
	 */
	User findUserByUserNameAndPassword(@Param("userName") String userName, @Param("password") String password);

	
}
