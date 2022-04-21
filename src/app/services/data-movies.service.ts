import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataMoviesService {

  constructor(private http: HttpClient) { }

  getDiscover(){

      return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=4a7510a72a10ec2e95049e26379edbc8&language=es&primary_release_date.gte=2022-03-01&primary_release_date.lte=2022-03-31');


  }
}
