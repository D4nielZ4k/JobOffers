package com.findjobb;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "hello")
public class HelloWorld {
	@Id
	String message;

	public HelloWorld() {
		message = "Hello World!";
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
