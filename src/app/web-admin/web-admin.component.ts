import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {WebService} from "./web.service";
import {environment} from "../../environments/environment";
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-web-admin',
  templateUrl: './web-admin.component.html',
  styleUrls: ['./web-admin.component.css']
})
export class WebAdminComponent implements OnInit {

  packages : any = [];
  package : any;
  deliveries : any = [];
  delivery : any;
  admin_form = this.formBuilder.group({delivery_id : ['']});

  constructor(private webService : WebService, private formBuilder : FormBuilder) {
    this.packageList();
    this.deliveryList();
  }

  ngOnInit(): void {
    // this.packageList();
    this.admin_form = this.formBuilder.group({delivery_id : ''});
  }

  private getPackageId (){
    return this.admin_form.get('package_id') as FormControl
  }

  private getDeliveryId (){
    return this.admin_form.get('delivery_id') as FormControl
  }

  packageList() : void {
    this.webService.packageList().subscribe((data : any) => this.packages = data.body.data);
  }

  deliveryList() : void {
    this.webService.deliveryList().subscribe((data : any) => this.deliveries = data.body.data)
  }

}
