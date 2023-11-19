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

    <div class="col-md-12">
      <app-product></app-product>
    </div>

    <!-- Card footer -->
  </div>
</div>
