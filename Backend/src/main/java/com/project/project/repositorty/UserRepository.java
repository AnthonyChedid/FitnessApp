package com.project.project.repositorty;


import com.project.project.model.Trainer;
import com.project.project.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByEmail(String email);
}
