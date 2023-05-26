import { NumberFormatter } from '@angular/common/src/pipes/deprecated/intl';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  user: userData = {
    cpf: '',
    dataNascimento: '',
  };
  t1 = new Date();
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}

  submitCheck() {
    if (this.user.cpf && this.user.dataNascimento) {
      this.showAlert();
    } else {
      const alert = this.alertCtrl.create({
        title: 'Campos obrigatórios',
        subTitle: 'Por favor, forneça os dados, preencha todos os campos ',
        buttons: ['OK'],
      });
      alert.present();
    }
  }

  nextPage() {
    this.navCtrl.push(AboutPage, {
      data: this.user,
    });
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Senha gerada',
      subTitle: this.t1.getTime().toString(),
      buttons: ['OK'],
    });
    alert.present();
  }
}

interface userData {
  cpf: number;
  dataNascimento: string;
}
