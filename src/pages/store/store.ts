import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CatalogPage } from '../catalog/catalog'

@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})
export class StorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }
  showCatalog(){
    this.navCtrl.push(CatalogPage);
  }

}
