package top.hyzhu.springboot.prouduct.api.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;
import top.hyzhu.springboot.prouduct.api.entity.Product;
import top.hyzhu.springboot.prouduct.api.mapper.ProductMapper;
import top.hyzhu.springboot.prouduct.api.service.ProductService;



/**
 * @Author: zhy
 * @Description:
 * @Date: 2024-10-29 10:32
 **/
@Service
public class ProductServiceImpl extends ServiceImpl<ProductMapper, Product> implements ProductService {

}
