import { Component, OnInit } from '@angular/core';
import { Cetpro } from 'src/app/interfaces/Cetpro';
import { ApiService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-cetpro-page',
  templateUrl: './cetpro-page.component.html',
  styles: [
  ]
})
export class CetproPageComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  cetproList: Cetpro[] = [];

  fetchData(): void {
    this.apiService.getData('active').subscribe(
      (data: Cetpro[]) => {
        this.cetproList = data;
        console.log(this.cetproList);
      }
    );
  }

}
