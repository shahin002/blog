import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {FrontendComponent} from './frontend/frontend.component';
import {HeaderComponent} from './frontend/includes/header/header.component';
import {FooterComponent} from './frontend/includes/footer/footer.component';
import {HomeComponent} from './frontend/home/home.component';
import {AboutComponent} from './frontend/about/about.component';
import {AdminComponent} from './admin/admin.component';
import { AdminHeaderComponent } from './admin/includes/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/includes/admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin/includes/admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';

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
        AdminHeaderComponent,
        AdminFooterComponent,
        AdminSidebarComponent,
        AdminDashboardComponent,
        AdminUsersComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
