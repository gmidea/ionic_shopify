import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

// import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
// import { HomePage } from '../pages/home/home';
// import { ImagePage } from '../pages/image/image';
// import { UserProfilePage } from '../pages/user-profile/user-profile';
// import { MyProfilePage } from '../pages/my-profile/my-profile';
// import { MessagePage } from '../pages/message/message';
// import { StorePage } from '../pages/store/store';
// import { CatalogPage } from '../pages/catalog/catalog';
// import { ProductPage } from '../pages/product/product';
// import { CartPage } from '../pages/cart/cart';
// import { CheckoutPage } from '../pages/checkout/checkout';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
