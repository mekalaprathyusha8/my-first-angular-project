import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Sidenav } from './sidenav/sidenav';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Sidenav],
  templateUrl: './app.html',
})
export class App {
  title = 'Services Demo';
}
