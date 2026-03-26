package com.ey.Shopify.service;

import com.ey.Shopify.entity.Product;
import java.util.List;

public interface ProductService {
    List<Product> getAll();
    List<Product> getByCategory(String category);
    Product create(Product product);
    List<Product> searchByName(String name);
    Product update(Long id, Product updatedProduct);
    void delete(Long id);
}