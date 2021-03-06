package com.project.project.repositorty;

import com.project.project.model.Category;
import com.project.project.model.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TrainerRepository extends JpaRepository<Trainer, Long> {
    List<Trainer> findByCategories_Name(String type);

    List<Trainer> findByNameStartingWithIgnoreCase(String name);

    List<Trainer> findByNameStartingWithIgnoreCaseAndCategories_Name(String name, String type);
}