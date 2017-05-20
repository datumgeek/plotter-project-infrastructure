import { Injectable } from '@angular/core';
import { IDatasource, IGetRowsParams, GridApi } from 'ag-grid';
import { SuppliersClient, Suppliers } from '../api-client';

@Injectable()
export class SuppliersGridService implements IDatasource {

    public rowCount?: number = -1;
    public filterModel: any = {};
    public gridApi: GridApi = null;

    constructor() { }

    getRows(params: IGetRowsParams): void {
        // capture the most recent fetch's filter
        this.filterModel = params.filterModel;

        // fetch the data

    }
}
