import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ImagePage} from '../image/image'
import { UserProfilePage} from '../user-profile/user-profile'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToImage(){
    this.navCtrl.push(ImagePage);
  }
  goToUserProfile(){
    this.navCtrl.push(UserProfilePage);
  }

}
