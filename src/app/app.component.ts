import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toto';
}
export class SidenavOpenCloseExample {
  events: string[] = [];
  opened: boolean;

  shouldRun = true;
}