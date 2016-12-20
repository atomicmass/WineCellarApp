import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: 
    `
  	<h1>Angular</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/wines" routerLinkActive="active">Wines</a>
    </nav>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['app.component.css']
})

export class AppComponent { 


}
