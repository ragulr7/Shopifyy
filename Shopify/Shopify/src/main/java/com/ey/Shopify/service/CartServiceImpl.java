package com.ey.Shopify.service;
import com.ey.Shopify.entity.CartItem;
import com.ey.Shopify.repository.CartRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {

    private final CartRepository repo;

    public CartServiceImpl(CartRepository repo) {
        this.repo = repo;
    }

    @Override
    public CartItem addToCart(CartItem item) {
        return repo.findByProductId(item.getProductId())
                .map(existing -> {
                    existing.setQuantity(existing.getQuantity() + item.getQuantity());
                    return repo.save(existing);
                })
                .orElseGet(() -> repo.save(item));
    }

    @Override
    public List<CartItem> getCartItems() {
        return repo.findAll();
    }

    @Override
    public void removeItem(Long id) {
        repo.deleteById(id);
    }

    @Override
    public void clearCart() {
        repo.deleteAll();
    }

    @Override
    public CartItem updateQuantity(Long id, int quantity) {
        CartItem item = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Cart item not found"));
        item.setQuantity(quantity);
        return repo.save(item);
    }
}
