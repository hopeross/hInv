import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from 'src/app/models/inventory';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  id: number = 0;
  currentItem: Inventory = new Inventory();

  constructor(private inventoryService: InventoryService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const routeID = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeID);
    this.inventoryService.getInventoryItemById(this.id).subscribe(foundItem => {
      this.currentItem = foundItem;
    })
  }

  onSubmit(){
    this.inventoryService.editInventoryItemById(this.id, this.currentItem).subscribe(editedItem => {
      this.router.navigateByUrl("/inventory");
    })
  }
}