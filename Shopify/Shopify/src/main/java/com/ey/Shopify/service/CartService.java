package com.ey.Shopify.service;
import com.ey.Shopify.entity.CartItem;
import java.util.List;

public interface CartService {
    CartItem addToCart(CartItem item);
    List<CartItem> getCartItems();
    void removeItem(Long id);
    void clearCart();
    CartItem updateQuantity(Long id, int quantity);
}
