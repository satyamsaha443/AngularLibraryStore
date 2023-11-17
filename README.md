package com.Main.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.models.Client;

public interface ClientRepository extends MongoRepository<Client, String> {
	

}
