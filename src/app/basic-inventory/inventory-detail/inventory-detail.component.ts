import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inventory } from 'src/app/models/inventory';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.css']
})
export class InventoryDetailComponent implements OnInit {
  id: number = 0;
  currentItem: Inventory = new Inventory();

  constructor(private inventoryService: InventoryService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.inventoryService.getInventoryItemById(this.id).subscribe(foundItem => {
      console.log(foundItem);
      this.currentItem = foundItem;
    })
  }

}