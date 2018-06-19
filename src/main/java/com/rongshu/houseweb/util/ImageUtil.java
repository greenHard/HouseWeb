package com.rongshu.houseweb.util;

/**
 * @author zhang yuyang
 * @ClassName: com.rongshu.houseweb.util.ImageUtil
 * @Description: 图片工具类
 * @create 2018/05/30 15:41
 */
public class ImageUtil {

    private ImageUtil() {}


    /**
     * 判断文件是否为图片文件
     * @param fileName
     * @return
     */
    public static Boolean isImageFile(String fileName) {
        String[] img_type = new String[]{".jpg", ".jpeg", ".png", ".gif", ".bmp"};
        if (fileName == null) {
            return false;
        }
        fileName = fileName.toLowerCase();
        for (String type : img_type) {
            if (fileName.endsWith(type)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 获取文件后缀名
     * @param fileName
     * @return
     */
    public static String getFileType(String fileName) {
        if (fileName != null && fileName.indexOf(".") >= 0) {
            return fileName.substring(fileName.lastIndexOf("."), fileName.length());
        }
        return "";
    }
}
