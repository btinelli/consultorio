import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { SharedDataService } from '../../shared/shared-data-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  senha: senhaData;
  senhaList = [];
  checkPrioridade = true;
  constructor(
    public navCtrl: NavController,
    public sharedDataService: SharedDataService,
    public alertCtrl: AlertController
  ) {
    this.senhaList = sharedDataService.getSenhas();
    this.changePrioridade();
  }

  changePrioridade() {
    if (this.checkPrioridade) {
      let senhaAux = ([] = this.sharedDataService.getSenhas());
      this.senhaList = senhaAux.filter((item) => item.prioritaria == true);
    } else {
      let senhaAux = ([] = this.sharedDataService.getSenhas());
      this.senhaList = senhaAux.filter((item) => item.prioritaria == false);
    }
  }

  selectedSenha(item) {
    this.senha = item;
  }
  complete() {
    console.log(this.senha);
    if (this.senha) {
      this.removeObjectWithId(this.senhaList, this.senha.id);
    } else {
      const alert = this.alertCtrl.create({
        title: 'Selecione uma senha',
        subTitle: 'Por favor, selecione uma senha. ',
        buttons: ['OK'],
      });
      alert.present();
    }
  }

  removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
    arr.splice(objWithIdIndex, 1);
    this.sharedDataService.setSenhaCahamada(this.senha);
    this.senha = null;
    return arr;
  }
}
interface senhaData {
  id: number;
  senha: String;
  prioritaria: boolean;
}
