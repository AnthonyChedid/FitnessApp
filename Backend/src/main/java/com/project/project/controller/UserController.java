package com.project.project.controller;

import com.project.project.model.Category;
import com.project.project.model.Trainer;
import com.project.project.model.User;
import com.project.project.repositorty.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Date;
import java.util.List;
import java.util.Set;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getAllUsers(){

        return userRepository.findAll();
    }

    @GetMapping("/userbyemail")
    public List<User> getUser(@RequestParam String email){

        return userRepository.findByEmail(email);
    }

    @PostMapping("/adduser")
    @CrossOrigin(origins ="http://localhost:3000")
    public User createUser (@RequestBody User user) {

        return userRepository.save(user);
    }

}
