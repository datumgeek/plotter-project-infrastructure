import { Component, OnInit } from '@angular/core';
import { SuppliersClient, Suppliers } from '../api-client';

@Component({
  selector: 'ppi-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.less']
})
export class SuppliersListComponent implements OnInit {
    public suppliers: Suppliers[] = [];

  constructor(private suppliersClient: SuppliersClient) { }

  ngOnInit() {
      this.suppliersClient.getAll()
          .subscribe(suppliers => { this.suppliers = suppliers; });
  }
}
