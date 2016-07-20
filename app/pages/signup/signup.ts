import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../providers/user/user.model';
import { AuthService } from '../../providers/auth/auth.service';

import { MapPage } from '../map/map';


@Component({
  templateUrl: 'build/pages/signup/signup.html',
})
export class SignupPage {
  
  user: User = new User();

  constructor(
    private nav: NavController,
    private auth: AuthService
  ) {

  }

  goBack() {
    this.nav.pop();
  }

  goToMainPage() {
    this.nav.setRoot(MapPage);
  }

  submit() {
    this.auth.signup(this.user)
      .then(() => this.goToMainPage());
  }

}
