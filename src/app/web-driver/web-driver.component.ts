import { Component, OnInit } from '@angular/core';
import {WebService} from "../web-admin/web.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-web-driver',
  templateUrl: './web-driver.component.html',
  styleUrls: ['./web-driver.component.css']
})
export class WebDriverComponent implements OnInit {

  packages : any = [];
  deliveries : any = [];

  constructor(private webService : WebService) {
    this.packageList();
    this.deliveryList();
  }

  ngOnInit(): void {
  }

  deliveryList() : void {
    this.webService.deliveryList().subscribe((data : any) => this.deliveries = data.body.data)
  }

  packageList() : void {
    this.webService.packageList().subscribe((data : any) => this.packages = data.body.data);
  }

}
