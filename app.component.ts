import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ContentComponent } from './components/content/content.component';
import { Observable, of } from 'rxjs';
export var apiValues;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})


export class AppComponent implements OnInit {

  apiValues: string[] = [];

  constructor(private _httpService: Http) { }

  ngOnInit() {
    this._httpService.get('/api/values').subscribe(values => {
      this.apiValues = values.json() as string[];
    });

    
    }
  }
