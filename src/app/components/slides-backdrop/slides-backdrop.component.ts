import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movies } from 'src/app/Interfaces/Interfaces';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slides-backdrop',
  templateUrl: './slides-backdrop.component.html',
  styleUrls: ['./slides-backdrop.component.scss'],
})
export class SlidesBackdropComponent implements OnInit {

  @Input() discover: Movies [] = [];

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
