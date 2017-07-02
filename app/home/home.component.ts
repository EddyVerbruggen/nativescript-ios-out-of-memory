import { Component } from "@angular/core";
import { GC } from "tns-core-modules/utils/utils";
import { Subscription } from "rxjs/Subscription";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "ns-home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
})
export class HomeComponent {

  private totalLoops: number = 0;
  public currentLoop: number = 0;

  private routerSubscription: Subscription;

  constructor(private router: Router) {
    console.log(">>> HomeComponent constructor");
  }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd && e.url === "/home") {
        console.log(">> nav end " + this.currentLoop);
        if (++this.currentLoop < this.totalLoops) {
          this.goToListView();
        }
      }
    });
  };

  loop(nrOfTimes: number): void {
    this.currentLoop = 0;
    this.totalLoops = nrOfTimes;
    this.goToListView();
  }

  goToListView(): void {
    this.router.navigate(['/items']);
  }

  doGC(): void {
    GC();
  }
}