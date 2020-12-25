package com.project.project.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="trainer")
@Setter
@Getter
public class Trainer {
    @Id
    @Column(name="trainer_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long trainer_id;
    private String firstName;
    private String lastName;
    private Date dateOfBirth;

    @ManyToMany
    @JoinTable(
            name = "trainer_categories",
            joinColumns = @JoinColumn(name = "trainer_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    Set<Category> categories;

    private String location;
    private String email;
    private String instagram;
    private String number;
    private String image;


}
