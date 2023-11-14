 products: Product[] = [];
  isModalOpen = false;
  isEditing = false;
  formData: Product = {
    // Initialize formData with empty values for the form fields
    id: '',
    productName: '',
    category: { id: '', category_name: '', status_id: '', category_details: '' },
    supplier: { id: '', supplierName: '', supplierPhone: '', supplierEmail: '', supplierCompany: '', supplierAddress: '', statusId: '', supplierDescription: '' },
    productUnit: '',
    productAlertQuantity: '',
    productSupplierPrice: '',
    productSellPrice: '',
    productCode: '',
    productTax: '',
    warehouseId: '',
    productDetails: '',
    productDetailsForInvoice: '',
    buys: []
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  openCreateProductModal() {
    this.isModalOpen = true;
    this.isEditing = false;
    // Initialize formData with empty values for creating a new product
    this.formData = {
      id: '',
      productName: '',
      category: { id: '', category_name: '', status_id: '', category_details: '' },
      supplier: { id: '', supplierName: '', supplierPhone: '', supplierEmail: '', supplierCompany: '', supplierAddress: '', statusId: '', supplierDescription: '' },
      productUnit: '',
      productAlertQuantity: '',
      productSupplierPrice: '',
      productSellPrice: '',
      productCode: '',
      productTax: '',
      warehouseId: '',
      productDetails: '',
      productDetailsForInvoice: '',
      buys: []
    };
  }

  editProduct(product: Product) {
    this.isModalOpen = true;
    this.isEditing = true;
    // Set formData to the selected product for editing
    this.formData = { ...product };
  }

  deleteProduct(id: string) {
    // Implement the deleteProduct method to delete a product by ID
    this.productService.deleteProduct(id).subscribe(() => {
      // After deletion, reload the list of products
      this.loadProducts();
    });
  }

  createProduct() {
    // Implement the createProduct method to create a new product
    this.productService.createProduct(this.formData).subscribe(() => {
      // After creation, close the modal and reload the list of products
      this.isModalOpen = false;
      this.loadProducts();
    });
  }

  updateProduct() {
    // Implement the updateProduct method to update an existing product
    this.productService.updateProduct(this.formData.id, this.formData).subscribe(() => {
      // After update, close the modal and reload the list of products
      this.isModalOpen = false;
      this.loadProducts();
    });
  }

  closeModal() {
    this.isModalOpen = false;
  }
