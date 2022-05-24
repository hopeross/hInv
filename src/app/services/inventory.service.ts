import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from '../models/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  dataSource = "http://localhost:3000/inventory"

  constructor(private http: HttpClient) { }

  getAllInventoryItems(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.dataSource);
  }

  getInventoryItemById(id: number): Observable<Inventory> {
    return this.http.get<Inventory>(this.dataSource + "/" + id);
  }

  createNewInventoryItem(newInventory: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(this.dataSource, newInventory);
  }

  editInventoryItemById(id: number, editedInventory: Inventory): Observable<Inventory> {
    return this.http.put<Inventory>(this.dataSource + "/" + id, editedInventory);
  }

  deleteInventoryItemById(id: number): Observable<any> {
    return this.http.delete<any>(this.dataSource + "/" + id);
  }
}
