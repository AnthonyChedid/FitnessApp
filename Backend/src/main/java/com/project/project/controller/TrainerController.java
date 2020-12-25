package com.project.project.controller;

import com.project.project.model.Trainer;
import com.project.project.repositorty.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
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


}

