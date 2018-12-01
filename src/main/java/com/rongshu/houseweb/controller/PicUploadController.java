package com.rongshu.houseweb.controller;

import com.rongshu.houseweb.util.OssAliyunUtil;
import com.rongshu.houseweb.vo.PicUploadResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;


@Controller
public class PicUploadController {
    private static final Logger log = LoggerFactory.getLogger(PicUploadController.class);

    @Resource
    private OssAliyunUtil ossAliyunUtil;


    //文件上传	/pic/upload 注意：uploadFile是common.js中25行定义名称，就等同于自己写的文件上传框的名称
    @RequestMapping("/pic/upload")
    @ResponseBody
    public PicUploadResult picUpload(MultipartFile uploadFile) throws IOException {
        log.info("8>>>>>>开始进行图片上传");
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
        log.info("8>>>>>>上传的文件名称oldFileName:" + oldFileName + ",扩展名为extFileName:" + extFileName);

        //文件后缀判断 .jpg/.gif/.png
        if (!extFileName.matches("^.*(jpg|gif|png)$")) {
            log.error("8>>>>>>上传的文件名称格式有误");
            result.setError(1);
        } else {
            //如果它是一个木马文件，它就不能被转成图片对象，它就没有height，width
            try {
                BufferedImage bufImage = ImageIO.read(uploadFile.getInputStream());
                result.setHeight(bufImage.getHeight() + "");
                result.setWidth(bufImage.getWidth() + "");
                log.info("8>>>>>>上传的图片的宽为:" + bufImage.getWidth() + "高为:" + bufImage.getHeight());
                // 文件保存到磁盘
                String upload = ossAliyunUtil.upload(uploadFile);
                result.setUrl(upload);
                // uploadFile.transferTo(new File(path + fileName));
                // 执行权限
                // Runtime.getRuntime().exec("chmod -R 755 " + path);
            } catch (Exception e) {
                log.info("8>>>>>>上传文件出现异常", e);
                // 图片转换时报错
                result.setError(1);
            }
        }
        return result;
    }
}
