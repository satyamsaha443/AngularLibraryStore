<nav *ngIf="!hasRoute('login')" class="sidenav navbar navbar-vertical  fixed-left navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner">
      <!-- Brand -->
      <div class="sidenav-header  align-items-center">
        <a class="navbar-brand" href="javascript:void(0)">
          <img width="70" height="70" src="inventorycapstonefront\src\assets\img\theme\warehouse.png" style="max-height: 80px;" class="navbar-brand-img" alt="...">
        </a>
        <!-- Sidebar toggler button-->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">button</span>
        </button>
      </div>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
          <!-- Nav items -->
          <app-navigation></app-navigation>
        </div>
      </div>
    </div>
  </nav>
