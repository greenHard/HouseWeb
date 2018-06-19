package com.rongshu.houseweb.validate;

import com.rongshu.houseweb.validate.annotation.CannotHaveBlank;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * @author zhang yuyang
 * @ClassName: com.rongshu.houseweb.validate.CannotHaveBlankValidator
 * @Description: 不能有空格校验
 * @create 2018/05/31 11:07
 */
public class CannotHaveBlankValidator implements ConstraintValidator<CannotHaveBlank, String> {

    @Override
    public void initialize(CannotHaveBlank constraintAnnotation) {

    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        // ConstraintValidatorContext 这个上下文包含了认证中所有的信息，
        // 我们可以利用这个上下文实现获取默认错误提示信息，禁用错误提示信息，改写错误提示信息等操作。
        // null时不进行校验
        if (value != null && value.contains(" ")) {
            // 获取默认提示信息
            String defaultConstraintMessageTemplate = context.getDefaultConstraintMessageTemplate();
            System.out.println("default message :" + defaultConstraintMessageTemplate);
            // 禁用默认提示信息
            context.disableDefaultConstraintViolation();
            // 设置提示语
            context.buildConstraintViolationWithTemplate("can not contains blank").addConstraintViolation();
            return false;
        }
        return true;
    }
}
