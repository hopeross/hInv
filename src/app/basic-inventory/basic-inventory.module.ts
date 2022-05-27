import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInventoryRouting } from './basic-inventory-routing.module';
import { RouterModule } from '@angular/router';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InventoryListComponent,
    InventoryDetailComponent,
    EditItemComponent,
    CreateItemComponent
  ],
  imports: [
    CommonModule,
    BasicInventoryRouting,
    RouterModule,
    FormsModule
  ]
})
export class BasicInventoryModule { }
