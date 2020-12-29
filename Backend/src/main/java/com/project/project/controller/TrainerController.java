package com.project.project.controller;

import com.project.project.model.Category;
import com.project.project.model.Trainer;
import com.project.project.repositorty.TrainerRepository;
import com.project.project.service.TrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Date;
import java.util.List;
import java.util.Set;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TrainerController {

    @Autowired
    private TrainerRepository trainerRepository;

    @Autowired
    private TrainerService trainerService;

    @GetMapping("/trainers")
    public List<Trainer> getAllTrainers(){

        return trainerRepository.findAll();
    }

    @GetMapping("/trainers-by-name")
    public List<Trainer> getTrainersByName(@RequestParam String name){

        return trainerRepository.findByNameStartingWithIgnoreCase(name);
    }

    @GetMapping("/trainers-by-type")
    @CrossOrigin(origins ="http://localhost:3000")
    public List<Trainer> getTrainersByType(@RequestParam String type){

        return trainerRepository.findByCategories_Name(type);
    }

    @GetMapping("/trainers-by-name_type")
    @CrossOrigin(origins ="http://localhost:3000")
    public List<Trainer> getTrainersByNameAndType(@RequestParam String name,@RequestParam String type){

        return trainerRepository.findByNameStartingWithIgnoreCaseAndCategories_Name(name, type);
    }


    @PostMapping("/addtrainer")
    @CrossOrigin(origins ="http://localhost:3000")
    public String createTrainer (@RequestParam String name,@RequestParam Date dateOfBirth,
                                 @RequestParam String location,@RequestParam String email,@RequestParam String password,@RequestParam MultipartFile image,
                                 @RequestParam Set<Category > categories){
        trainerService.saveTrainer(name,dateOfBirth,location,email,password,image,categories);
        return "redirect:/";
    }


}

