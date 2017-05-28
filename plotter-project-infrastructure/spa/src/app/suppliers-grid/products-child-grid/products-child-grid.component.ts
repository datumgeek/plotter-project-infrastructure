import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GridOptions } from "ag-grid/main";
import { ICellRendererAngularComp } from "ag-grid-angular/main";

@Component({
    selector: 'ppi-products-child-grid',
    templateUrl: './products-child-grid.component.html',
    styleUrls: ['./products-child-grid.component.less']
})
export class ProductsChildGridComponent implements ICellRendererAngularComp, AfterViewInit {

    public gridOptions: GridOptions;
    public parentRecord: any;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableFilter = true;
        this.gridOptions.enableColResize = true;
        this.gridOptions.columnDefs = this.createColumnDefs();
    }

    agInit(params: any): void {
        this.parentRecord = params.node.parent.data;
    }

    ngAfterViewInit() {
        this.gridOptions.api.setRowData(this.parentRecord.products);
        this.gridOptions.api.sizeColumnsToFit();
    }

    private createColumnDefs() {
        return [
            { headerName: 'ProductId', field: 'productId' },
            { headerName: 'Name', field: 'productName' },
            { headerName: 'Q per U', field: 'quantityPerUnit' }
        ];
    }
}
