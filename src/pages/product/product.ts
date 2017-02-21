import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
  goToCart(){
    this.navCtrl.push(CartPage);
  }

}
