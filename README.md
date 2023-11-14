
  ngOnInit(): void {
    this.employeeTestService.ID.subscribe(idd => {
      // Check if idd is not null and is a valid number
      if (idd && !isNaN(parseInt(idd))) {
        const employee = this.employeeTestService.get(parseInt(idd));
        this.model = employee ? employee : this.create();
      } else {
        this.model = this.create();
      }
    });
  }

  edit() {
    this.employeeTestService.update(this.model);
    super.show('Confirmation', this.message.confirmations.edit, 'success');
  }
}
