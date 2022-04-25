import { Component, OnInit } from '@angular/core';
import { DataMoviesService } from '../services/data-movies.service';
import { ResulTMDB, Movies } from '../Interfaces/Interfaces';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  discover: Movies[]=[
    
  ];

  constructor(private dataMovies: DataMoviesService) {
  }

  ngOnInit(): void {

    this.dataMovies.getDiscover().
        subscribe(
          resp=>{
          console.log(resp)
          this.discover = resp.results;
          }
        );

  }

}
