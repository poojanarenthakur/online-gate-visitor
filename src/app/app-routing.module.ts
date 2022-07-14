import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminLoginComponent } from './pages/login/admin-login/admin-login.component';
import { LoginHomeComponent } from './pages/login/login-home/login-home.component';
import { OwnerLoginComponent } from './pages/login/owner-login/owner-login.component';
import { GuardLoginComponent } from './pages/login/guard-login/guard-login.component';
import { EmployeeLoginComponent } from './pages/login/employee-login/employee-login.component';
const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},
{
  path: 'home', component: HomeComponent,
  children:
    [
      { path: 'login', component: LoginHomeComponent },
      { path: '**', redirectTo: 'home' }

    ]
},
{
  path: 'login-home', component: LoginHomeComponent,
  children:
    [
      { path: '**', redirectTo: 'login-home' },
      { path: 'admin', component: AdminLoginComponent },
      { path: 'owner', component: OwnerLoginComponent },
      { path: 'guard', component: GuardLoginComponent },
      { path: 'employee', component: EmployeeLoginComponent }
    ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
