package com.project.project.controller;

import com.project.project.model.Category;
import com.project.project.model.DummyTrainer;
import com.project.project.model.Trainer;
import com.project.project.repositorty.TrainerRepository;
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
    public Trainer createTrainer (@RequestBody Trainer trainer){

            return trainerRepository.save(trainer);

    }


}

