import { Component } from '@angular/core';
import { ValuesClient } from './api-client';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    vals: string[] = ['(empty)'];
    constructor(private valuesClient: ValuesClient) {
        this.valuesClient.getAll().subscribe(values => { this.vals = values; });
    }

    title = 'app works!';
}
