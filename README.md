@PostMapping("/create")
public ResponseEntity<?> createProduct(@RequestBody Products product) {
    // Save the product
    Products savedProduct = productRepository.save(product);

    // Update the category
    Category category = product.getCategory_id();
    if (category != null) {
        category.getProducts().add(savedProduct);
        categoryRepository.save(category);
    }

    // Update the supplier
    Supplier supplier = product.getSupplier_id();
    if (supplier != null) {
        supplier.getProducts().add(savedProduct);
        supplierRepository.save(supplier);
    }

    return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
}