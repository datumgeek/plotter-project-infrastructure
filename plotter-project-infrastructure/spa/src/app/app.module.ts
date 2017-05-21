﻿import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ValuesClient, SuppliersClient } from './api-client';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular/main';

import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { SuppliersGridComponent } from './suppliers-grid/suppliers-grid.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        SuppliersListComponent,
        SuppliersGridComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AgGridModule.withComponents([]),
        AppRoutingModule,
        NgbModule.forRoot()
    ],
    providers: [ValuesClient, SuppliersClient],
    bootstrap: [AppComponent]
})
export class AppModule { }
