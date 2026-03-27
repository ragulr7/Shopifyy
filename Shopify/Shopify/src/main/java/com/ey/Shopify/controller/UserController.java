package com.ey.Shopify.controller;

import com.ey.Shopify.entity.User;
import com.ey.Shopify.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping
    public User saveUser(@RequestBody User user) {
        return service.saveUser(user);
    }
}
