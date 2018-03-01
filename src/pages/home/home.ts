import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdduserPage } from '../adduser/adduser';

import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;

  constructor(public navCtrl: NavController, public rest: RestProvider) {
    this.getUsers();
  }

  getUsers() {
    this.rest.getUsers()
    .then(data => {
      this.users = data;
    });
  }

  goToAddUser() {
    this.navCtrl.push(AdduserPage);
  }

}
