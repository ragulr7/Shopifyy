package com.ey.Shopify.service;

import com.ey.Shopify.entity.Product;
import com.ey.Shopify.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository repo;

    @Override
    public List<Product> getAll() {
        return repo.findAll();
    }
    @Override
    public List<Product> getByCategory(String category) {
        return repo.findByCategoryIgnoreCase(category);
    }

    @Override
    public Product create(Product product) {
        return repo.save(product);
    }

    @Override
    public List<Product> searchByName(String name) {
        return repo.findByNameContainingIgnoreCase(name);
    }

    @Override
    public Product update(Long id, Product updatedProduct) {
        Product existing = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));

        existing.setName(updatedProduct.getName());
        existing.setCategory(updatedProduct.getCategory());
        existing.setPrice(updatedProduct.getPrice());
        existing.setImage(updatedProduct.getImage());
        return repo.save(existing);
    }

    @Override
    public void delete(Long id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException("Product not found!");
        }
        repo.deleteById(id);
    }
}