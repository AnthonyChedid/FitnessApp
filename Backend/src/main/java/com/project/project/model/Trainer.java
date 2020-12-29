package com.project.project.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
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

    private String name;
    private Date dateOfBirth;
    private String location;
    private String email;
    private String password;
    
    @Lob
    private byte[] image;

    @ManyToMany
    @JoinTable(
            name = "trainer_categories",
            joinColumns = @JoinColumn(name = "trainer_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    Set<Category> categories;

    public Trainer(){

    }

    public Trainer(String name, Date dateOfBirth, String location, String email, String password, String number, byte[] image, Set<Category> categories) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.location = location;
        this.email = email;
        this.password = password;
        this.image = image;
        this.categories = categories;
    }

    public Long getTrainer_id() {
        return trainer_id;
    }


    public String name() {
        return name;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public String getLocation() {
        return location;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }


    public byte[] getImage() {
        return image;
    }

    public Set<Category> getCategories() {
        return categories;
    }
}
