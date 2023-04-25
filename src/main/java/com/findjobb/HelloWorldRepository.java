package com.findjobb;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface HelloWorldRepository extends CrudRepository<HelloWorld, Long> {

	@Query(
		value = "SELECT 'Hello world!' message", nativeQuery = true)
	HelloWorld getHelloWorldFromDatabase();
}
