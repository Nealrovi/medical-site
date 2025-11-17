import {Component} from '@angular/core';
import { Header } from "src/header/header";
import { Descriptor } from "src/descriptor/descriptor";
import { NavBar } from "src/nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [Header, Descriptor, NavBar],
  templateUrl: "./app.html",
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Medical Colombia';
}
