package com.project.project.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.sql.Date;
import java.util.Set;


public class DummyTrainer {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long dummy_id;

        public String name;
        private Date dateOfBirth;
        private String location;
        private String email;
        private String password;

        @Lob
        private MultipartFile image;

        @ManyToMany
        @JoinTable(
                name = "trainer_categories",
                joinColumns = @JoinColumn(name = "trainer_id"),
                inverseJoinColumns = @JoinColumn(name = "category_id"))
        Set<Category> categories;

        public DummyTrainer(){

        }

        public DummyTrainer(String name, Date dateOfBirth, String location, String email, String password,MultipartFile image, Set<Category> categories) {
            this.name = name;
            this.dateOfBirth = dateOfBirth;
            this.location = location;
            this.email = email;
            this.password = password;
            this.image = image;
            this.categories = categories;
        }


        public String getName() {
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

        public MultipartFile getImage() {
            return image;
        }

        public Set<Category> getCategories() {
            return categories;
        }


}
