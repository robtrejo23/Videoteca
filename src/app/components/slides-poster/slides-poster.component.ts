import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/Interfaces/Interfaces';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slides-poster',
  templateUrl: './slides-poster.component.html',
  styleUrls: ['./slides-poster.component.scss'],
})
export class SlidesPosterComponent implements OnInit {

  @Input() discover: Movies [] = [];
  @Input() title: String="";

  constructor(private modalControler: ModalController) { }

  ngOnInit() {}

  async showDetails(id: number){
    const modal = await this.modalControler.create({
      component: DetailsComponent, componentProps: {
        id: id
      }
    });

    modal.present();
  
  
  //console.log(id);
  }

}
