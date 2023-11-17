@PostMapping("/create")
public ResponseEntity<?> createSellWithClient(@Validated @RequestBody Sell sell, BindingResult result) {
    if (result.hasErrors()) {
        Map<String, String> errorMap = new HashMap<>();
        for (FieldError error : result.getFieldErrors()) {
            errorMap.put(error.getField(), error.getDefaultMessage());
        }
        
        return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
    }

    // Create a new client object from the data in the Sell object
    Client client = new Client(sell.getCustomer().getName(), sell.getCustomer().getEmail(), sell.getCustomer().getPhone());

    // Save the new client object to the database
    clientRepository.save(client);

    // Associate the new client object with the sell object
    sell.setCustomer(client);

    // Save the new sell object to the database
    Sell newSell = sellService.saveOrUpdate(sell);
    return new ResponseEntity<>(newSell, HttpStatus.CREATED);
}
