import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SuppliersClient, Suppliers } from '../api-client';
import { GridOptions, ColDef } from 'ag-grid';

@Component({
    selector: 'ppi-suppliers-grid',
    templateUrl: './suppliers-grid.component.html',
    styleUrls: ['./suppliers-grid.component.less']
})
export class SuppliersGridComponent implements AfterViewInit {
    public suppliers: Suppliers[] = [];
    private gridOptions: GridOptions;

    constructor(private suppliersClient: SuppliersClient) {
        this.gridOptions = {};
    }

    ngAfterViewInit() {
        this.suppliersClient.getAll()
            .subscribe(suppliers => {
                this.suppliers = suppliers;
                this.gridOptions.api.setColumnDefs(this.getColumns(suppliers));
                this.gridOptions.api.setRowData(suppliers);
            });
    }

    getColumns(list: Object[]): ColDef[] {
        var columnDefs: ColDef[] = [];
        if (list.length > 0) {
            for (var prop in list[0]) {
                switch (typeof list[0][prop]) {
                    case 'function':
                        break;

                    default:
                        columnDefs.push({ headerName: prop, field: prop });
                        break;
                }
            }
        }
        return columnDefs;
    }
}
