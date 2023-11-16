export class BarcodeScanComponent implements OnInit {
    sku: string | undefined;
    formats = [BarcodeFormat.CODE_128, BarcodeFormat.EAN_13, BarcodeFormat.QR_CODE];

    // ... rest of your component ...
}