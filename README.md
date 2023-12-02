import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService  implements CanActivate{

    constructor(private router: Router,
    private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
     {
       return true
     }else
     {
       this.router.navigate(['login']);
       return false;
     }

    

  }
}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './general/dashboard/dashboard.component';
import { LoginComponent } from './general/login/login.component';
import { BuyComponent } from './modules/buy/buy/buy.component';
import { AuthguardService } from './main/security/authguard.service';
import { ExpenseComponent } from './modules/expense/expense/expense.component';
import { ProductComponent } from './modules/product/product/product.component';
import { CategoryComponent } from './modules/category/category/category.component';
import { ClientComponent } from './modules/client/client/client.component';
import { RevenueComponent } from './modules/revenue/revenue/revenue.component';
import { SaleComponent } from './modules/sell/sale/sale.component';
import { StockComponent } from './modules/stock/stock/stock.component';
import { SupplierComponent } from './modules/supplier/supplier/supplier.component';
import { ConfigurationComponent } from './general/configuration/configuration.component';
import { ProfileComponent } from './general/profile/profile.component';
import { EditprofileComponent } from './general/editprofile/editprofile.component';
import { EmployeeComponent } from './modules/employee/employee/employee.component';
import { BarcodeScanComponent } from './modules/barcode-scan/barcode-scan.component';
import { RegisterComponent } from './general/register/register.component';
const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '', redirectTo: 'register', pathMatch: 'full' },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full',canActivate:[AuthguardService]},
  { path: 'configuration', component: ConfigurationComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'editprofile', component: EditprofileComponent, pathMatch: 'full',canActivate:[AuthguardService]  },

  {path:'employee', component: EmployeeComponent, pathMatch:'full', canActivate:[AuthguardService]},
  {path:'barcode', component:BarcodeScanComponent, pathMatch:'full', canActivate:[AuthguardService]},
  { path: 'buy', component: BuyComponent, pathMatch: 'full' ,canActivate:[AuthguardService] },

  { path: 'category', component: CategoryComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  
  { path: 'client', component: ClientComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'expense', component: ExpenseComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'revenue', component: RevenueComponent, pathMatch: 'full' ,canActivate:[AuthguardService] },
  { path: 'product', component: ProductComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'sale', component: SaleComponent, pathMatch: 'full' ,canActivate:[AuthguardService] },
  { path: 'stock', component: StockComponent, pathMatch: 'full',canActivate:[AuthguardService]  },
  { path: 'supplier', component: SupplierComponent, pathMatch: 'full',canActivate:[AuthguardService]  },

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
