import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharedDataService } from '../../shared/shared-data-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  senhaList = [];
  constructor(
    public navCtrl: NavController,
    public sharedDataService: SharedDataService
  ) {
    this.senhaList = sharedDataService.getSenhasChamadas();
  }
}
