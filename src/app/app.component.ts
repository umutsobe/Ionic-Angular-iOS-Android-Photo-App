import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
      <app-tabs></app-tabs>
    </ion-app>
  `,
})
export class AppComponent {
  constructor() {}
}
