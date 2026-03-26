package com.ey.Shopify.controller;

import com.ey.Shopify.entity.Product;
import com.ey.Shopify.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping
    public List<Product> getAll() {
        return service.getAll();
    }

    @GetMapping("/category/{category}")
    public List<Product> getByCategory(@PathVariable String category) {
        return service.getByCategory(category);
    }

    @PostMapping
    public Product addProduct(@RequestBody Product p) {
        return service.create(p);
    }
    @GetMapping("/search/{name}")
    public List<Product> searchByName(@PathVariable String name) {
        return service.searchByName(name);
    }


    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
        return service.update(id, updatedProduct);

    }


    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id) {
        service.delete(id);
        return "Product deleted successfully!";
    }
}