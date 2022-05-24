import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { HomeComponent } from './components/home/home.component';
import { InventoryDetailComponent } from './components/inventory-detail/inventory-detail.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: HomeComponent },
  { path: "inventory", component: InventoryListComponent},
  { path: "inventory/:id", component: InventoryDetailComponent},
  { path: "create", component: CreateItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





// const routes: Routes = [
//   { path: "", redirectTo: "contacts", pathMatch: "full"},
//   { path: "contacts", component: ContactListComponent },
//   { path: "contacts/:id", component: ContactDetailComponent },
//   { path: "create", component: CreateContactComponent },
//   { path: "edit/:id", component: EditContactComponent }
// ];

// { path: "", redirectTo: "home", pathMatch: "full" },
// { path: "home", component: HomeComponent},
// { path: "about", component: AboutComponent },
// { path: "jobs", component: JobsComponent },
// { path: "job-details/:jobID", component: JobDetailsComponent },
// { path: "**" , component: NotfoundComponent}
