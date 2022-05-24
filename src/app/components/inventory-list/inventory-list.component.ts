import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/models/inventory';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  inventoryList: Inventory[] = []

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getAllInventoryItems().subscribe(allInventory => {
      console.log(allInventory);
      this.inventoryList = allInventory;
    })

  }

}