import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { RouterExtensions } from "nativescript-angular";

@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService,
              private routerExtensions: RouterExtensions) {
    console.log("ItemsComponent constructor");
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems();

    // load the list, then auto-nav back
    setTimeout(() => {
      this.routerExtensions.back();
    }, 1500);
  }
}