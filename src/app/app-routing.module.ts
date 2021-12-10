import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WebAdminComponent} from "./web-admin/web-admin.component";
import {WebDriverComponent} from "./web-driver/web-driver.component";
import {WebTrackerComponent} from "./web-tracker/web-tracker.component";
import {WebAdminCreatePackageComponent} from "./web-admin-create-package/web-admin-create-package.component";
import {WebAdminCreateDeliveryComponent} from "./web-admin-create-delivery/web-admin-create-delivery.component";

const routes: Routes = [
  { path: 'web-admin', component: WebAdminComponent },
  { path: 'web-driver', component: WebDriverComponent },
  { path: 'web-tracker', component: WebTrackerComponent },
  { path: 'admin/create/package', component: WebAdminCreatePackageComponent },
  { path: 'admin/create/delivery', component: WebAdminCreateDeliveryComponent },
  { path: '', component: WebDriverComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
