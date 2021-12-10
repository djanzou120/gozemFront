import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  @Input() packages!: Array<any>;
  @Input('title') title = ''; // tslint:disable-line: no-input-renam
  constructor() { }

  ngOnInit(): void {
  }

}
