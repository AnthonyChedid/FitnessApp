package com.project.project.service;

import com.project.project.model.Category;
import com.project.project.model.Trainer;
import com.project.project.repositorty.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class TrainerService {
    @Autowired
    private TrainerRepository trainerRepository;

    public Trainer saveTrainer(String name, Date dateOfBirth,
                               String location, String email, String password, MultipartFile image,
                               Set<Category > categories){
        try{
            Trainer trainer =new Trainer(name, dateOfBirth, location, email, password,image.getBytes(), categories);
            return trainerRepository.save(trainer);
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public Optional<Trainer> getFile(Long field){
        return trainerRepository.findById(field);
    }
    public List<Trainer> getFiles(){
        return trainerRepository.findAll();
    }
}
