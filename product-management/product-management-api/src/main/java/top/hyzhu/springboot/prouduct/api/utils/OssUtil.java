package top.hyzhu.springboot.prouduct.api.utils;

import com.aliyun.oss.OSS;
import jakarta.annotation.Resource;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import top.hyzhu.springboot.prouduct.api.config.OssConfig;
import java.io.InputStream;
import java.util.UUID;

/**
 * @Author: zhy
 * @Description:
 * @Date: 2024-09-24 1:23
 **/
@Component
@AllArgsConstructor
public class OssUtil {
    private final OssConfig ossConfig;
    private final OSS ossClient;

    /**
     * 上传⽂件
     *
     * @param file ⽂件参数
     * @return 返回文件的url
     */
    public String uploadfile(MultipartFile file) {
        try {
            String originalFileName = file.getOriginalFilename();
            if (originalFileName == null) {
                throw new IllegalArgumentException("文件名称不能为空");
            }
            String fileName = "upload/" + UUID.randomUUID() + "_" + originalFileName;
            InputStream inputStream = file.getInputStream();
            ossClient.putObject(ossConfig.getBucketName(), fileName, inputStream);
            return "https://" + ossConfig.getBucketName() + "." + ossConfig.getEndpoint().replace("https://", "") + "/" + fileName;
        } catch (Exception e) {
            throw new RuntimeException("上传文件失败", e);
        }
    }
}
