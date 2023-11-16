<div class="container-fluid">
    <!-- ... other elements ... -->
    <zxing-scanner [formats]="['EAN_13', 'CODE_128', 'QR_CODE']" (scanSuccess)="handleBarcode($event)"></zxing-scanner>
    <!-- ... other elements ... -->
</div>

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // ... selector, templateUrl, styleUrls ...
})
export class BarcodeScanComponent implements OnInit {
    sku: string | undefined;

    constructor(private router: Router) { }

    ngOnInit() { }

    handleBarcode(result: string) {
        this.sku = result;
        this.navToProduct();
    }

    navToInventory(){
        this.router.navigate(['/dashboard'])
    }

    navToProduct(){
        this.router.navigate(['/product/' + this.sku])
    }
}