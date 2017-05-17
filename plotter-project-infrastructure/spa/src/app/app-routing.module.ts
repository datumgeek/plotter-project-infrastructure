import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { SuppliersGridComponent } from './suppliers-grid/suppliers-grid.component';

const routes: Routes = [
    { path: '', children: [] },
    { path: 'suppliers-list', component: SuppliersListComponent },
    { path: 'suppliers-grid', component: SuppliersGridComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
