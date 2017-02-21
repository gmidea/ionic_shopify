import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ImagePage } from '../pages/image/image';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { MessagePage } from '../pages/message/message';
import { StorePage } from '../pages/store/store';
import { CatalogPage } from '../pages/catalog/catalog';
import { ProductPage } from '../pages/product/product';
import { CartPage } from '../pages/cart/cart';
import { CheckoutPage } from '../pages/checkout/checkout';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ImagePage,
    UserProfilePage,
    MyProfilePage,
    MessagePage,
    StorePage,
    CatalogPage,
    ProductPage,
    CartPage,
    CheckoutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ImagePage,
    UserProfilePage,
    MyProfilePage,
    MessagePage,
    StorePage,
    CatalogPage,
    ProductPage,
    CartPage,
    CheckoutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
