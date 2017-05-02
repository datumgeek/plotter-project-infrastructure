import { Component, OnInit } from '@angular/core';
import { ValuesClient } from '../api-client';

@Component({
    selector: 'ppi-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

    public jobs: string[] = [];

    constructor(private valuesClient: ValuesClient) { }

    runTest() {
        this.valuesClient.runExample(5)
            .subscribe(job => {
                this.jobs[this.jobs.length] = (<any>job).value;
            });
    }

    ngOnInit() {
    }

}
