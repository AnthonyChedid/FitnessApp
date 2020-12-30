package com.project.project.controller;


import com.project.project.model.Session;
import com.project.project.model.User;
import com.project.project.repositorty.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class SessionController {

    @Autowired
    private SessionRepository sessionRepository;

    @GetMapping("/sessions")
    public List<Session> getAllSessions(@RequestParam String email){

        return sessionRepository.findByUser_Email(email);
    }

    @PostMapping("/newsession")
    @CrossOrigin(origins ="http://localhost:3000")
    public Session createSession (@RequestBody Session session) {

        return sessionRepository.save(session);
    }


}

