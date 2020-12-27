package com.project.project.repositorty;

import com.project.project.model.Category;
import com.project.project.model.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TrainerRepository extends JpaRepository<Trainer, Long> {
//    List<Trainer> findByCategory (Category type);
    List<Trainer> findByCategories_Name(String name);
    List<Trainer> findByFirstNameStartingWithIgnoreCase (String name);
}