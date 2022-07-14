import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Pages/header/header.component';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginHeaderComponent } from './Pages/login/login-header/login-header.component';
import { AdminLoginComponent } from './pages/login/admin-login/admin-login.component';
import { LoginHomeComponent } from './pages/login/login-home/login-home.component';
import { OwnerLoginComponent } from './pages/login/owner-login/owner-login.component';
import { GuardLoginComponent } from './pages/login/guard-login/guard-login.component';
import { EmployeeLoginComponent } from './pages/login/employee-login/employee-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    LoginHeaderComponent,
    AdminLoginComponent,
    LoginHomeComponent,
    OwnerLoginComponent,
    GuardLoginComponent,
    EmployeeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
