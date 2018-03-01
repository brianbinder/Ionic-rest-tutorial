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
  public name;
  public email;
  public phone;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private rest: RestProvider) {
  }

  postUser() {
    const user = {
      name: this.name,
      email: this.email,
      phone: this.phone
    }
    this.rest.addUser(user)
    .then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
    .then(() => {
      this.name = '';
      this.email = '';
      this.phone = '';
    });
  }

}
