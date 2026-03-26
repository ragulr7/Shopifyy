package com.ey.Shopify.controller;

import com.ey.Shopify.entity.CartItem;
import com.ey.Shopify.service.CartService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin("*")
public class CartController {

    private final CartService service;

    public CartController(CartService service) {
        this.service = service;
    }

    @PostMapping
    public CartItem addToCart(@RequestBody CartItem item) {
        return service.addToCart(item);
    }
    @GetMapping
    public List<CartItem> getCartItems() {
        return service.getCartItems();
    }
    @DeleteMapping("/{id}")
    public String removeItem(@PathVariable Long id) {
        service.removeItem(id);
        return "Item removed!";
    }
    @PutMapping("/{id}/{qty}")
    public CartItem updateQuantity(@PathVariable Long id, @PathVariable int qty) {
        return service.updateQuantity(id, qty);
    }
    @DeleteMapping("/clear")
    public String clearCart() {
        service.clearCart();
        return "Cart cleared!";
    }
}
