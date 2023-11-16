
Error: src/app/modules/barcode-scan/barcode-scan.component.html:25:32 - error TS2322: Type 'string' is not assignable to type 'BarcodeFormat'.

25     <zxing-scanner [formats]="['EAN_13', 'CODE_128', 'QR_CODE']" (scanSuccess)="handleBarcode($event)"></zxing-scanner>
                                  ~~~~~~~~

  src/app/modules/barcode-scan/barcode-scan.component.ts:8:16
    8   templateUrl: './barcode-scan.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component BarcodeScanComponent.


Error: src/app/modules/barcode-scan/barcode-scan.component.html:25:42 - error TS2322: Type 'string' is not assignable to type 'BarcodeFormat'.

25     <zxing-scanner [formats]="['EAN_13', 'CODE_128', 'QR_CODE']" (scanSuccess)="handleBarcode($event)"></zxing-scanner>
                                            ~~~~~~~~~~

  src/app/modules/barcode-scan/barcode-scan.component.ts:8:16
    8   templateUrl: './barcode-scan.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component BarcodeScanComponent.


Error: src/app/modules/barcode-scan/barcode-scan.component.html:25:54 - error TS2322: Type 'string' is not assignable to type 'BarcodeFormat'.

25     <zxing-scanner [formats]="['EAN_13', 'CODE_128', 'QR_CODE']" (scanSuccess)="handleBarcode($event)"></zxing-scanner>
                                                        ~~~~~~~~~

  src/app/modules/barcode-scan/barcode-scan.component.ts:8:16
    8   templateUrl: './barcode-scan.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component BarcodeScanComponent.




× Failed to compile.
