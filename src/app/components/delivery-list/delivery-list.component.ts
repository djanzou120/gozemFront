import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {
  @Input() deliveries!: Array<any>;
  @Input('title') title = ''; // tslint:disable-line: no-input-renam
  constructor() { }

  ngOnInit(): void {
  }

}
