import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {
  planets: Observable<any>;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.planets = this.api.getPlanets();
    this.planets.subscribe(data => {
      console.log('planets ', data)
    })
  }

  openPlanetDetails(planet) {
    let split = planet.url.split('/');
    let planetId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/planets/${planetId}`);
  }

}
