import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; 
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  people: Observable<any>;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.people = this.api.getPeople();
    this.people.subscribe(data => {
      console.log('people', data)
    })
  }

  openPeopleDetails(person) {
    let split = person.url.split('/');// ["https:", "", "swapi.co", "api", "people", "9", ""]
    let personId = split[split.length-2];//1
    this.router.navigateByUrl(`/tabs/people/${personId}`);
  }

}
