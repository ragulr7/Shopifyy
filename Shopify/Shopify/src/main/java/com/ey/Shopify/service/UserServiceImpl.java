package com.ey.Shopify.service;


import com.ey.Shopify.entity.User;
import com.ey.Shopify.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository repo;

    public UserServiceImpl(UserRepository repo) {
        this.repo = repo;
    }

    @Override
    public User saveUser(User user) {
        return repo.save(user);
    }
}
