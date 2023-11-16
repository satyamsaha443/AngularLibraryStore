<div class="row ml-1 mr-1 mt-5" style="text-align: center;">

<div id="camera" style="width: 100%; height: 300px;"></div>
    <div id="home">
      <a routerLink="/product"><i class="fa fa-3x fa-arrow-left"></i></a>
    </div>
    <div id="profile">
      <h1>SCAN</h1>
    </div>
    <div id="check">
    </div>
  </div>
  
  
  <div class="container-fluid">
    <zxing-scanner [formats]="formats" (scanSuccess)="handleBarcode($event)">Cam</zxing-scanner>

    
    <form class="border-dark">
      <div class="form-group">
        <label style="text-align: center">SKU</label>
        
        
        <input style="align-content: center" type="text" class="form-control" [(ngModel)]="sku"
               [ngModelOptions]="{standalone: true}"/>
      </div>
    </form>

  
    <button type="button" class="btn btn-primary btn-lg btn-block" (click)="navToProduct()">SCAN</button>
    <button type="button" class="btn btn-danger btn-lg btn-block" (click)="navToInventory()">CANCEL</button>
  
  </div>
