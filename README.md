package dev.delta.stockbay.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import dev.delta.stockbay.entities.Sell;
import dev.delta.stockbay.services.SellService;

@RestController
@RequestMapping("/stockbay/sells") // Changed to plural to follow RESTful standards
@CrossOrigin
public class SellController {
    @Autowired
    SellService sellService;

    @PostMapping // Simplified path
    public ResponseEntity<?> createSell(@Validated @RequestBody Sell sell, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }

        Sell newSell = sellService.saveOrUpdate(sell);
        return new ResponseEntity<>(newSell, HttpStatus.CREATED);
    }

    @GetMapping // Simplified path
    public ResponseEntity<Iterable<Sell>> getAllSells() {
        Iterable<Sell> sells = sellService.findAll();
        return new ResponseEntity<>(sells, HttpStatus.OK);
    }

    @GetMapping("/{id}") // Simplified path
    public ResponseEntity<Sell> getSellById(@PathVariable Long id) {
        Sell sell = sellService.findById(id);
        if (sell == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(sell, HttpStatus.OK);
    }

    @DeleteMapping("/{id}") // Simplified path
    public ResponseEntity<String> deleteSell(@PathVariable Long id) {
        Sell sell = sellService.findById(id);
        if (sell == null) {
            return new ResponseEntity<>("Sell not found", HttpStatus.NOT_FOUND);
        }

        sellService.delete(id);
        return new ResponseEntity<>("Sell deleted successfully", HttpStatus.OK);
    }
}