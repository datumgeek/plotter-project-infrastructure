import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { SuppliersGridComponent } from '../suppliers-grid.component';
import { Suppliers } from '../../api-client';

@Component({
  selector: 'ppi-suppliers-processor',
  templateUrl: './suppliers-processor.component.html',
  styleUrls: ['./suppliers-processor.component.less']
})
export class SuppliersProcessorComponent implements AgRendererComponent {
    params: any;
    supplier: Suppliers;
    suppliersGrid: SuppliersGridComponent;

    isProcessing = false;
    message = "";
    processCount = 0;

    constructor() { }

    runProcess() {
        this.isProcessing = true;
        this.processCount = 0;
        this.message = 'queuing process...';
        this.loop();
    }

    loop() {
        this.processCount++;
        if (this.processCount > 5) {
            this.isProcessing = false;
            return;
        }
        this.message = `running step ${this.processCount}`;
        setTimeout(() => { this.loop() }, 1000);
    }

    agInit(params: any) {
        if (params && params.node) {
            this.supplier = params.node.data;
            this.suppliersGrid = params.context;
        }
    }
}
