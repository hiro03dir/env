package com.example.spring.testApi;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class TestEntity {
    @Id
    private Integer id;
    @Column
    private String email;
    @Column
    private String name;
}
