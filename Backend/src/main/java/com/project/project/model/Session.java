package com.project.project.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="session")
@Getter
@Setter
public class Session {
    @Id
    @Column(name="session_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long session_id;

    @ManyToOne(optional = false)
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne(optional = false)
    @JoinColumn(name="trainer_id")
    private Trainer trainer;

    private Date sessionDate;
    private String length;

}
