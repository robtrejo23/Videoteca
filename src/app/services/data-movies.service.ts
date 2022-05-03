import { Injectable, Query } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { ResulTMDB } from '../Interfaces/Interfaces';
import { environment } from 'src/environments/environment';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

const URL= environment.URL;

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class DataMoviesService {

  constructor(private http: HttpClient) { }

  private execQuery<T>(query: string){
    query = URL + query; //'https://api.themoviedb.org/3/discover/movie
    query += `&api_key=${API_KEY}&language=es`;
    
    return this.http.get<T>(query);
 
  }

  getDiscover(){

    const fechaActual = new Date ();
    const ultimoDia = new Date(fechaActual.getFullYear(), fechaActual.getMonth()+1,0).getDate();
    const mes = fechaActual.getMonth()+1;
    let mesString;

    if(mes < 10){

      mesString = '0' + mes;

    }else {
      mesString = mes; 
    }

    const fecInicio = `${fechaActual.getFullYear()}-${mesString}-01`;
    const fecFin = `${fechaActual.getFullYear()}-${mesString}-${ultimoDia}`;


    return this.execQuery<ResulTMDB>(`/discover/movie?primary_release_date.gte=${fecInicio}&primary_release_date.lte=${fecFin}`);
     // return this.http.get<ResulTMDB>('https://api.themoviedb.org/3/discover/movie?api_key=4a7510a72a10ec2e95049e26379edbc8&language=es&primary_release_date.gte=2022-03-01&primary_release_date.lte=2022-03-31');


  }

  getPopularity(){
    return this.execQuery<ResulTMDB>(`/discover/movie?sort_by=popularity.asc`);
  }
}
