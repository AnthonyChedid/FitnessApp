package com.project.project.controller;

import com.project.project.model.Category;
import com.project.project.repositorty.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/categories")
    public List<Category> getAllCategories(){

        return categoryRepository.findAll();
    }

    @GetMapping("/categoriesbyname")
    public List<Category> getCategory(@RequestParam String name){

        return categoryRepository.findByName(name);
    }


}

