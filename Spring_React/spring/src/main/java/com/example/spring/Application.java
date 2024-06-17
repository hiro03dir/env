package com.example.spring;

import com.example.spring.testApi.TestController;
import com.example.spring.testApi.TestEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Optional;

@SpringBootApplication
public class Application implements CommandLineRunner{
	@Autowired
	private TestController testController;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
		System.out.println("Hello world");
	}

	// TODO:あとで削除
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Hello world");
		System.out.println("Hello world123");
		Optional<TestEntity> testOptional = testController.testOutput();
		if (testOptional.isPresent()) {
			System.out.println("TestEntity: " + testOptional.get());
		} else {
			System.out.println("TestEntity not found.");
		}
	}

}
