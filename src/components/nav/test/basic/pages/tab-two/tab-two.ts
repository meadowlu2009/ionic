import { Component } from '@angular/core';
import { App, IonicPage, Tabs } from '../../../../../..';

@IonicPage({
  name: 'tab-two'
})
@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Schedule</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item-sliding *ngFor="let session of sessions" #slidingItem>
          <ion-item>
            <h3>{{session.name}} {{session.name}} {{session.name}}</h3>
            <p>{{session.location}} {{session.location}} {{session.location}}</p>
          </ion-item>
          <ion-item-options>
            <ion-button color="primary">Speaker<br>Info</ion-button>
            <ion-button color="secondary">Add to<br>Favorites</ion-button>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
      <p>
        <ion-button (click)="selectPrevious()">Select Previous Tab</ion-button>
      </p>
      <p>
        <ion-button (click)="appNavPop()">App Nav Pop</ion-button>
      </p>
    </ion-content>
  `
})
export class Tab2 {
  sessions: any[] = [];

  constructor(private tabs: Tabs, private app: App) {
    for (var i = 1; i <= 250; i++) {
      this.sessions.push({
        name: 'Name ' + i,
        location: 'Location: ' + i
      });
    }
  }

  selectPrevious() {
    this.tabs.select(this.tabs.previousTab());
  }

  appNavPop() {
    this.app.navPop();
  }
}
