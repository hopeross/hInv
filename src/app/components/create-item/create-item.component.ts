import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/models/inventory';
import { InventoryService } from 'src/app/services/inventory.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  newItem: Inventory = new Inventory();

  constructor(private inventoryService: InventoryService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.inventoryService.createNewInventoryItem(this.newItem).subscribe(response => {
      console.log(response)
      this.router.navigateByUrl("/inventory");
    })
  }
}


// onSubmit() {
//   this.contactService.createNewContact(this.newContact).subscribe(response => {
//     console.log(response);
//     this.router.navigateByUrl("/contacts");
//   });