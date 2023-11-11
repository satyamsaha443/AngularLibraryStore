<!-- dashboard.component.html -->
<div class="dashboard-container">
  <app-sidebar></app-sidebar>
  <div class="dashboard-content">
    <h1>Inventory Dashboard</h1>
    <!-- Your dashboard content goes here -->
  </div>
</div>



<!-- sidebar.component.html -->
<div class="sidebar">
  <ul>
    <li><a routerLink="/dashboard">Dashboard</a></li>
    <li><a routerLink="/inventory">Inventory</a></li>
    <li><a routerLink="/reports">Reports</a></li>
    <!-- Add more links as needed -->
  </ul>
</div>


/* sidebar.component.css */
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li a {
  text-decoration: none;
  color: black;
  display: block;
  padding: 10px 0;
}



/* dashboard.component.css */
.dashboard-container {
  display: flex;
}

.dashboard-content {
  flex-grow: 1;
  padding: 20px;
}
