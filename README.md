<div class="col-md-6">
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3">Income</h4>
      <canvas id="incomeChart" height="225"></canvas>
    </div>
  </div>
</div>

<div class="col-md-6">
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3">Expense</h4>
      <canvas id="expenseChart" height="225"></canvas>
    </div>
  </div>
</div>



import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.createChart('incomeChart', [20000, 14000, 12000, 15000, 18000, 19000, 22000], 'rgba(0, 128, 0, 1)');
    this.createChart('expenseChart', [43000, 53000, 34000, 38000, 66000, 77000, 53000], 'rgba(255, 0, 0, 1)');
  }

  createChart(chartId: string, data: number[], bgColor: string): void {
    const ctx = (document.getElementById(chartId) as HTMLCanvasElement).getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
          label: '',
          data: data,
          backgroundColor: bgColor,
          borderColor: bgColor,
        }]
      }
    });
  }
}
