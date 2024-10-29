package top.hyzhu.springboot.prouduct.api.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import top.hyzhu.springboot.prouduct.api.entity.Product;

/**
 * @Author: zhy
 * @Description:
 * @Date: 2024-10-29 10:28
 **/
@Mapper
public interface  ProductMapper  extends BaseMapper<Product> {
}
