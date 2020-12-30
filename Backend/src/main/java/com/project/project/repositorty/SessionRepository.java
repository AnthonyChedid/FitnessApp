package com.project.project.repositorty;

import com.project.project.model.Session;
import com.project.project.model.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SessionRepository extends JpaRepository<Session, Long> {
    List<Session> findByUser_Email(String email);
}
