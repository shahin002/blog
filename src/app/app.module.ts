import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FrontendComponent } from './frontend/frontend.component';
import { HeaderComponent } from './frontend/includes/header/header.component';
import { FooterComponent } from './frontend/includes/footer/footer.component';
import { HomeComponent } from './frontend/home/home.component';
import { AboutComponent } from './frontend/about/about.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/includes/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLoginComponent,
    FrontendComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    SidebarComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
