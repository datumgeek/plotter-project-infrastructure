import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';

const routes: Routes = [
    { path: '', children: [] },
    { path: 'suppliers-list', component: SuppliersListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
