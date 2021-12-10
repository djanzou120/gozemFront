import { Component, OnInit } from '@angular/core';
import {WebService} from "../web-admin/web.service";
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-web-tracker',
  templateUrl: './web-tracker.component.html',
  styleUrls: ['./web-tracker.component.css']
})
export class WebTrackerComponent implements OnInit {

  packages : any = [];
  deliveries : any = [];
  admin_form = this.formBuilder.group({delivery_id : ['']});
  delivery_id : string = '';

  constructor(private webService : WebService, private formBuilder : FormBuilder) {
    this.packageList();
    this.deliveryList();
  }

  ngOnInit(): void {
    this.admin_form = this.formBuilder.group({delivery_id : ''});
  }

  getDeliveryId () {
    return this.admin_form.get('delivery_id') as FormControl;
  }

  onDeliverySearch() {
    console.log(this.getDeliveryId().value)
    this.packageShow(this.getDeliveryId().value);
  }

  packageShow(delivery_id : string) : any {
    this.webService.packageShow(delivery_id).subscribe((data) => {
      console.log(data);
    })
  }

  deliveryList() : void {
    this.webService.deliveryList().subscribe((data : any) => this.deliveries = data.body.data)
  }

  packageList() : void {
    this.webService.packageList().subscribe((data : any) => this.packages = data.body.data);
  }

}
