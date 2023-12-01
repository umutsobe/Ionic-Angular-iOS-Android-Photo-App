import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home">
          <ion-icon name="home"></ion-icon>
          Home
        </ion-tab-button>
        <ion-tab-button tab="settings">
          <ion-icon name="settings"></ion-icon>
          Settings
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
})
export class TabsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
