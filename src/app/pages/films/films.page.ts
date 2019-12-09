import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  films: Observable<any>
  constructor(private navController: NavController, private router: Router, private http: HttpClient, private api: ApiService) { }

  ngOnInit() {
    this.films = this.api.getFilms();
    this.films.subscribe(data => {
      console.log('data',data)
    })
  }


  openDetails(film) {
    let split = film.url.split('/');//["https:", "", "swapi.co", "api", "films", "1", ""]
    let filmId = split[split.length-2];//1
    this.router.navigateByUrl(`/tabs/films/${filmId}`);
  }

  // goToPlanets() {
  //   this.navController.navigateRoot(`/tabs/planets`)
  // }

}
