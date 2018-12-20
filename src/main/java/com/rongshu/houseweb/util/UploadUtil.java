package com.rongshu.houseweb.util;

import com.rongshu.houseweb.vo.PicUploadResult;
import org.apache.commons.lang3.RandomUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author zhang yuyang
 * @ClassName: com.rongshu.houseweb.util.UploadUtil
 * @Description: 上传工具类
 * @create 2018/05/31 9:44
 */
public class UploadUtil {

    private static final Logger log = LoggerFactory.getLogger(UploadUtil.class);

    /**
     * 上传地址
     */
    private static final String uploadPath = "D:/var/uploaded_files/";

    private UploadUtil() {
    }

    public static PicUploadResult picUpload(MultipartFile uploadFile) {

        /*
         * 文件上传步骤：
         * 1）拿到这个文件文件名，扩展名，判断是否合法的图片文件后缀
         * 2）判断它是否为木马
         * 3）生成两个路径：图片存放路径，图片网络上访问的相当路径
         * 4）图片存放目录，images文件太多，不方便管理，yyyy/MM/dd
         * 5）图片文件名重新命名currentTime+3位随机数/uuid+3位随机数
         * 6）图片保存
         * 7）返回这个对象的PicUploadResult，提前设置error/url/height/width
         */
        PicUploadResult result = new PicUploadResult();
        String oldFileName = uploadFile.getOriginalFilename();
        String extFileName = oldFileName.substring(oldFileName.lastIndexOf("."));

        // 文件后缀判断 .jpg/.gif/.png
        String regex = "^.*(jpg|gif|png)$";
        if (!extFileName.matches(regex)) {
            result.setError(1);
        } else {
            // 如果它是一个木马文件，它就不能被转成图片对象，它就没有height，width
            try {
                BufferedImage bufImage = ImageIO.read(uploadFile.getInputStream());
                result.setHeight(bufImage.getHeight() + "");
                result.setWidth(bufImage.getWidth() + "");

                String dir = new SimpleDateFormat("yyyy/MM/dd").format(new Date()) + "/";
                // 绝对路径：C:\jt-upload\images\2016\12\06\
                String path = uploadPath + dir;
                // 创建目录：
                File _dir = new File(path);
                // 如果目录不存在就创建
                if (!_dir.exists()) {
                    // 创建多级目录
                    _dir.mkdirs();
                }

                // 相当路径前缀
                String urlPrefix = uploadPath + dir;
                String fileName = System.currentTimeMillis() + "" + RandomUtils.nextInt(100, 999) + extFileName;

                result.setUrl(urlPrefix + fileName);
                // 文件保存到磁盘
                uploadFile.transferTo(new File(path + fileName));
            } catch (Exception e) {
                log.error(e.getMessage());
                // 图片转换时报错
                result.setError(1);
            }
        }
        return result;
    }
}
