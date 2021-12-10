import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebTrackerComponent } from './web-tracker/web-tracker.component';
import { WebDriverComponent } from './web-driver/web-driver.component';
import { WebAdminComponent } from './web-admin/web-admin.component';
import { WebAdminCreatePackageComponent } from './web-admin-create-package/web-admin-create-package.component';
import { WebAdminCreateDeliveryComponent } from './web-admin-create-delivery/web-admin-create-delivery.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {HttpClientModule} from "@angular/common/http";
import {WebService} from "./web-admin/web.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PackageListComponent} from "./components/package-list/package-list.component";
import { DeliveryListComponent } from './components/delivery-list/delivery-list.component'

@NgModule({
  declarations: [
    AppComponent,
    WebTrackerComponent,
    WebDriverComponent,
    WebAdminComponent,
    WebAdminCreatePackageComponent,
    WebAdminCreateDeliveryComponent,
    PackageListComponent,
    DeliveryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [WebService, WebAdminComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
