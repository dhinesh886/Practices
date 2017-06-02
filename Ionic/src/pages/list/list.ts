import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { MyActionsheet } from '../components/action-sheets/action-sheet';
import { AlertComponent} from '../components/alerts/alerts';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
     this.items = [
      { title: 'Action Sheets', component: MyActionsheet },
      { title: 'Alerts', component: AlertComponent }
    ];
    // for(let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component, {
      item: item
    });
  }
}
