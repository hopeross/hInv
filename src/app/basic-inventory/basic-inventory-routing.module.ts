import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateItemComponent } from './create-item/create-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';

const routes: Routes = [
    { path: '', component: InventoryListComponent },
    { path: 'edit/:id', component: EditItemComponent },
    { path: 'create', component: CreateItemComponent},
    { path: ':id', component: InventoryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicInventoryRouting { }