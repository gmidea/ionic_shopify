import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MessagePage } from '../message/message';
import { StorePage } from '../store/store';
import { MyProfilePage } from '../my-profile/my-profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  home: any = HomePage;
  text: any = MessagePage;
  contacts1: any = MyProfilePage; 
  store: any = StorePage;
  contacts: any = MyProfilePage;

  constructor() {

  }
}
