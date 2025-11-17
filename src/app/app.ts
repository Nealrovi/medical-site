import {Component} from '@angular/core';
import { Header } from "src/app/shared/header/header";
import { Descriptor } from "src/app/shared/descriptor/descriptor";
import { NavBar } from "src/app/shared/nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [Header, Descriptor, NavBar],
  templateUrl: "./app.html",
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Medical Colombia';
}
