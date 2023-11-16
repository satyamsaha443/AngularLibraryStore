import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Quagga from 'quagga'; // Importing QuaggaJS

@Component({
  selector: 'app-barcode-scan',
  templateUrl: './barcode-scan.component.html',
  styleUrls: ['./barcode-scan.component.css']
})
export class BarcodeScanComponent implements OnInit {
    sku: string | undefined;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    navToInventory(){
      this.router.navigate(['/dashboard'])
    }

    navToProduct(){
      this.router.navigate(['/product/' + this.sku])
    }

    scanBarcode() {
      Quagga.init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector('#camera') // Pass the camera viewfinder element here
        },
        decoder: {
          readers: ["code_128_reader"] // Specify the barcode format
        }
      }, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      });

      Quagga.onDetected((data) => {
        this.sku = data.codeResult.code;
        this.navToProduct(); // Navigate to product with the scanned SKU
        Quagga.stop(); // Stop the scanner
      });
    }
}


<div id="camera" style="width: 100%; height: 300px;"></div>