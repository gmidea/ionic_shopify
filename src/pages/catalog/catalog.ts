import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductPage } from '../product/product';

@Component({
  selector: 'page-catalog',
  templateUrl: 'catalog.html'
})
export class CatalogPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogPage');
  }
  goToCart(){
    this.navCtrl.push(ProductPage);
  }

}
