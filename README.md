@PostMapping("/create")
public ResponseEntity<?> createSellWithClient(@Validated @RequestBody Sell sell, BindingResult result) {
    if (result.hasErrors()) {
        Map<String, String> errorMap = new HashMap<>();
        for (FieldError error : result.getFieldErrors()) {
            errorMap.put(error.getField(), error.getDefaultMessage());
        }
        
        return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
    }

    Client clientFromSell = sell.getCustomer(); // Get the client object from the sell
    if (clientFromSell != null) {
        // Create a new client object from the data in the Sell object
        // Assuming these methods exist in your Client class
        Client client = new Client(clientFromSell.getCustomer_name(), clientFromSell.getCustomer_phone(),
                                   clientFromSell.getCustomer_address(), clientFromSell.getCustomer_email(),
                                   clientFromSell.getStatus_id(), clientFromSell.getCustomer_description());

        // Save the new client object to the database
        client = clientRepository.save(client);

        // Associate the new client object with the sell object
        sell.setCustomer(client);
    }

    // Save the new sell object to the database
    Sell newSell = sellService.saveOrUpdate(sell);
    return new ResponseEntity<>(newSell, HttpStatus.CREATED);
}