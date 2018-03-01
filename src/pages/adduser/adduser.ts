import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the AdduserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
})
export class AdduserPage {
  public user = {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private rest: RestProvider) {
  }

  postUser() {
    this.rest.addUser(this.user)
    .then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
    .then(() => {
      this.user = {
        name: '',
        email: '',
        phone: ''
      };
    });
  }

}
