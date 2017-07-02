"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var nativescript_angular_1 = require("nativescript-angular");
var ItemsComponent = (function () {
    function ItemsComponent(itemService, routerExtensions) {
        this.itemService = itemService;
        this.routerExtensions = routerExtensions;
        console.log("ItemsComponent constructor");
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.itemService.getItems();
        // load the list, then auto-nav back
        setTimeout(function () {
            _this.routerExtensions.back();
        }, 1500);
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./items.component.html",
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService,
        nativescript_angular_1.RouterExtensions])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
