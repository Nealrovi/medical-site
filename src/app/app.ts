import {Component} from '@angular/core';
import { Header } from './shared/header/header';
import { Descriptor } from './shared/descriptor/descriptor';
import { NavBar } from './shared/nav-bar/nav-bar';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Header, Descriptor, NavBar, RouterOutlet],
  templateUrl: "./app.html",
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Medical Colombia';
}
