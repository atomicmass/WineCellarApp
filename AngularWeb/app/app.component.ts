import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: 
    `
  	<h1>Wine</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/wines" routerLinkActive="active">Wines</a>
      <a routerLink="/estates" routerLinkActive="active">Estates</a>
      <a routerLink="/detail" routerLinkActive="active">Add Wine</a>
    </nav>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['app.component.css']
})

export class AppComponent { 


}
