package top.hyzhu.springboot.prouduct.api.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import top.hyzhu.springboot.prouduct.api.entity.Product;
import top.hyzhu.springboot.prouduct.api.service.ProductService;
import top.hyzhu.springboot.prouduct.api.utils.OssUtil;


import java.util.List;

/**
 * @Author: zhy
 * @Description:
 * @Date: 2024-10-29 10:31
 **/
@RestController
@RequestMapping("/api/products")
@AllArgsConstructor
public class ProductController {
    private final ProductService productService;
    private final OssUtil ossUtil;

    //    查询所有商品
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.list();
    }

    //    查询单个商品
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getById(id);
    }

    //    创建商品
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Boolean createProduct(@RequestBody Product product) {
        return productService.save(product);
    }

    //    更新商品
    @PutMapping("/{id}")
    public Boolean updateProduct(@PathVariable Long id, @RequestBody Product product) {
        product.setId(id);
        return productService.updateById(product);
    }

    //    删除商品
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Boolean deleteProduct(@PathVariable Long id) {
        return productService.removeById(id);
    }

    @PostMapping("/upload")
    public String upload(@RequestParam("file") MultipartFile file) {
        System.out.println(file.getOriginalFilename());
        return ossUtil.uploadfile(file);
    }

}

