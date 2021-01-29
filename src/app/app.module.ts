import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { EmployeeModule } from './modules/employee/employee.module';
import { SecurityModule } from './security/security.module';
import {LocationsModule} from './modules/locations/locations.module';
import {TablesModule} from './modules/tables/tables.module';
import { AdminModule } from "./modules/admin/admin.module";

import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './modules/nav/nav.component';
import { FooterComponent } from './modules/footer/footer.component';
import { AdminComponent } from './modules/admin/admin/admin.component';
import { HomeModule } from './modules/home/home.module';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {AdminDashboardModule}  from './modules/admin-dashboard/admin-dashboard.module';
<<<<<<< HEAD
import {​​​​​ PlacesComponent }​​​​​ from './modules/places/places/places.component';
=======
import { PlacesComponent } from './modules/places/places/places.component'
>>>>>>> 0609e11688ae540237a226fc41ac23b58bea49a2

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PlacesComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EmployeeModule,
    SecurityModule,
    LocationsModule,
    TablesModule,
    BrowserModule,
    AdminModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    HomeModule,
    DashboardModule,
    AdminDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
