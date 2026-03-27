package com.ey.Shopify.repository;

import com.ey.Shopify.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

