package com.example.spring.testApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TestController {

    @Autowired
    TestRepository testRepository;

    public Optional<TestEntity> testOutput() {
        Optional<TestEntity> testOptional = this.testRepository.findById(1);
        return testOptional;
    }
}
