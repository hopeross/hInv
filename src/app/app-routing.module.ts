import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { HomeComponent } from './components/home/home.component';
import { InventoryDetailComponent } from './components/inventory-detail/inventory-detail.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: HomeComponent },
  { path: "inventory", component: InventoryListComponent},
  { path: "inventory/:id", component: InventoryDetailComponent},
  { path: "edit/:id", component: EditItemComponent},
  { path: "create", component: CreateItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }