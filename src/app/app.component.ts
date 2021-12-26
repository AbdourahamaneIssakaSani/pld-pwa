import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
  Inject
} from "@angular/core";
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PLD';
  constructor(
    private renderer: Renderer2,
    public location: Location,
    @Inject(DOCUMENT) document
  ) {}
  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.remove("bg-pld-transparent");
        element.classList.add("bg-pld-primary");
      }
    } else {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.add("bg-pld-transparent");
        element.classList.remove("bg-pld-primary");
      }
    }
  }
  ngOnInit() {
    this.onWindowScroll(event);
  }
}
