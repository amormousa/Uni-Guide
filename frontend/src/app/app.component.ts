import { Component } from "@angular/core";
import { HeaderComponent } from "./core/components/header/header.component";
import { HomeComponent } from "./features/home/home.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, HomeComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
