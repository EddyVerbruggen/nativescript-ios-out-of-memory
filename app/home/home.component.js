"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("tns-core-modules/utils/utils");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
        this.totalLoops = 0;
        this.currentLoop = 0;
        console.log(">>> HomeComponent constructor");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationEnd && e.url === "/home") {
                console.log(">> nav end " + _this.currentLoop);
                if (++_this.currentLoop < _this.totalLoops) {
                    _this.goToListView();
                }
            }
        });
    };
    ;
    HomeComponent.prototype.loop = function (nrOfTimes) {
        this.currentLoop = 0;
        this.totalLoops = nrOfTimes;
        this.goToListView();
    };
    HomeComponent.prototype.goToListView = function () {
        this.router.navigate(['/items']);
    };
    HomeComponent.prototype.doGC = function () {
        utils_1.GC();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "ns-home",
        moduleId: module.id,
        templateUrl: "./home.component.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
