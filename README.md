<div class="card">
  <!-- Card header -->
  <div class="card-header border-0">
    <h3 class="mb-0">Dashboard</h3>
  </div>
  <!-- Light table -->

  <div class="row">
    <div class="col-xl-3 col-md-6">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h5 class="card-title text-uppercase text-muted mb-0">
                Employees
              </h5>
              <span class="h2 font-weight-bold mb-0">23</span>
            </div>
            <div class="col-auto">
              <div
                class="
                  icon icon-shape
                  bg-gradient-red
                  text-white
                  rounded-circle
                  shadow
                "
              >
                <i class="ni ni-active-40"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h5 class="card-title text-uppercase text-muted mb-0">
                Expenses
              </h5>
              <span class="h2 font-weight-bold mb-0">2,356</span>
            </div>
            <div class="col-auto">
              <div
                class="
                  icon icon-shape
                  bg-gradient-orange
                  text-white
                  rounded-circle
                  shadow
                "
              >
                <i class="ni ni-chart-pie-35"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h5 class="card-title text-uppercase text-muted mb-0">Incomes</h5>
              <span class="h2 font-weight-bold mb-0">924</span>
            </div>
            <div class="col-auto">
              <div
                class="
                  icon icon-shape
                  bg-gradient-green
                  text-white
                  rounded-circle
                  shadow
                "
              >
                <i class="ni ni-money-coins"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h5 class="card-title text-uppercase text-muted mb-0">
                Products
              </h5>
              <span class="h2 font-weight-bold mb-0">23</span>
            </div>
            <div class="col-auto">
              <div
                class="
                  icon icon-shape
                  bg-gradient-info
                  text-white
                  rounded-circle
                  shadow
                "
              >
                <i class="ni ni-chart-bar-32"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h4 class="mb-3">Income</h4>
              <canvas
                id="team-chart"
                height="225"
                width="450"
                class="revenue-chart chartjs-render-monitor"
              ></canvas>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h4 class="mb-3">Expense</h4>
              <canvas
                id="team-chart"
                height="225"
                width="450"
                class="product-chart chartjs-render-monitor"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12">
      <app-product></app-product>
    </div>

    <!-- Card footer -->
  </div>
</div>


import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartItem } from 'chart.js';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  extends URLLoader implements OnInit {

  constructor() { 
    super()
  }

 override loadScripts() {
    let container=document.getElementsByTagName('app-root')[0];
    let promise = Promise.resolve();
    for (let url of this.myScripts) {
        promise = promise.then(_ => new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.innerHTML = '';
            script.src = url;
            script.async = false;
            script.defer = false;
            script.onload = () => { resolve(); }
            script.onerror = (e) => { reject(e); }
            container.appendChild(script);
        }));
    }
}
  

ngOnInit(): void {
   this.loadScripts()
  let data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
  let data2 = [43000, 53000, 34000, 38000, 66000, 77000, 53000];
  let labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  var ctx1 = document.getElementsByClassName("revenue-chart");
  var ctx2 = document.getElementsByClassName("product-chart");
  this.renderChart(data, labels,ctx1,'rgba(204, 0, 0, 1)');
  this.renderChart(data2, labels, ctx2, 'rgba(24, 0, 204, 1)');
  //super.show('StockBay', 'Cette application est en cours de développement.', 'info')
}


 renderChart(data: number[], labels: string[],ctx: HTMLCollectionOf<any> | ChartItem,color: string) {
 
 
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: '',
              data: data,
              backgroundColor: color ,
              borderColor: color,
          }]
      },
  });
}



























private myScripts = [
  "../assets/vendors/jquery/dist/jquery.min.js",
  "../assets/vendors/popper.js/dist/umd/popper.min.js",
  "../assets/vendors/bootstrap/dist/js/bootstrap.min.js",
  "../assets/js/main.js",
  "../assets/vendors/jszip/dist/jszip.min.js",
  "../assets/vendors/pdfmake/build/pdfmake.min.js",
  "../assets/vendors/pdfmake/build/vfs_fonts.js",
  "../assets/vendors/datatables.net-buttons/js/buttons.html5.min.js",
  "../assets/vendors/datatables.net-buttons/js/buttons.print.min.js",
  "../assets/vendors/datatables.net-buttons/js/buttons.colVis.min.js",
  "../assets/js/init-scripts/data-table/datatables-init.js"
];

}
