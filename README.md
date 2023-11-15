package com.Main.repository;

import com.Main.models.Products;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductsRepository extends MongoRepository<Products, String> {
    // Custom query methods can be added here
}

package com.Main.service;

import com.Main.models.Products;
import com.Main.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    public List<Products> findAll() {
        return productsRepository.findAll();
    }

    public Products findById(String id) {
        return productsRepository.findById(id).orElse(null);
    }

    public Products save(Products product) {
        return productsRepository.save(product);
    }

    public void deleteById(String id) {
        productsRepository.deleteById(id);
    }

    // Additional business logic methods can be added here
}


package com.Main.controller;

import com.Main.models.Products;
import com.Main.service.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductsController {

    @Autowired
    private ProductsService productsService;

    @GetMapping
    public List<Products> getAllProducts() {
        return productsService.findAll();
    }

    @GetMapping("/{id}")
    public Products getProductById(@PathVariable String id) {
        return productsService.findById(id);
    }

    @PostMapping
    public Products createProduct(@RequestBody Products product) {
        return productsService.save(product);
    }

    @PutMapping("/{id}")
    public Products updateProduct(@PathVariable String id, @RequestBody Products product) {
        product.setId(id);
        return productsService.save(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable String id) {
        productsService.deleteById(id);
    }

    // Additional RESTful endpoints can be added here
}