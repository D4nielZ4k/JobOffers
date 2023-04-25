package com.findjobb.controller;

import com.findjobb.HelloWorld;
import com.findjobb.HelloWorldRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/helloworld")
public class HelloWorldController {

	private final HelloWorldRepository helloWorldRepository;

	public HelloWorldController(HelloWorldRepository helloWorldRepository) {
		this.helloWorldRepository = helloWorldRepository;
	}

	@GetMapping
	public HelloWorld sayHello() {
		return helloWorldRepository.getHelloWorldFromDatabase();
	}

}
