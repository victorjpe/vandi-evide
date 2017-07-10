import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  timeRange: any = {lower: 0, upper: 24};
  busTiming: any = [];  

  constructor(public navCtrl: NavController) {

  }

  search = () => {
    this.busTiming = ["name","test","rate"];
  }

}
