import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserProfilePage} from '../user-profile/user-profile'

/*
  Generated class for the Image page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-image',
  templateUrl: 'image.html'
})
export class ImagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePage');
  }

  goToUserProfile(){
    this.navCtrl.push(UserProfilePage);
  }

}
