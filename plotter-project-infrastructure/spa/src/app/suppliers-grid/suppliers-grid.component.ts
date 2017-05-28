import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SuppliersClient, Suppliers } from '../api-client';
import { GridOptions, ColDef } from 'ag-grid';
import { ProductsChildGridComponent } from
    './products-child-grid/products-child-grid.component';

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

    public isFullWidthCell(rowNode) {
        return rowNode.level === 1;
    }

    public getNodeChildDetails(record: Suppliers) {
        if (record && record.products && record.products.length > 0) {
            return {
                group: true,
                // the key is used by the default group cellRenderer
                key: record.companyName,
                // provide ag-Grid with the children of this group
                children: [record.products],
                // for demo, expand rows beginning with 'e'
                expanded: record.companyName.toLowerCase().startsWith('e')
            };
        } else {
            return null;
        }
    }

    public getFullWidthCellRenderer() {
        return ProductsChildGridComponent;
    }

    public getRowHeight(params) {
        var rowIsDetailRow = params.node.level === 1;
        // return 100 when detail row, otherwise return 25
        return rowIsDetailRow ? 200 : 25;
    }

    getColumns(list: Object[]): ColDef[] {
        var columnDefs: ColDef[] = [];
        if (list.length > 0)
            columnDefs.push({
                headerName: '#',
                width: 30,
                checkboxSelection: (params) =>
                    params.data.companyName.toLowerCase().startsWith('e'),
                suppressSorting: true,
                suppressMenu: true,
                pinned: true,
                field: "isChecked"
            });

            for (var prop in list[0]) {
                switch (typeof list[0][prop]) {
                    case 'function':
                        break;

                    default:
                        if (prop === 'companyName') {
                            columnDefs.push({
                                headerName: prop,
                                field: prop,
                                pinned: true,
                                cellRenderer: 'group',
                                cellRendererParams: { suppressCount: true },
                                cellStyle: (params) =>
                                    params.data.companyName.toLowerCase().startsWith('e') ?
                                        {
                                            backgroundColor: 'green',
                                            color: 'white'
                                        }
                                        : {}
                            });
                        }
                        else {
                            columnDefs.push({
                                headerName: prop,
                                field: prop
                            });
                        }
                        break;
                }
            }
        return columnDefs;
    }
}
