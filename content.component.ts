import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { HttpClient } from 'selenium-webdriver/http';
import { Http } from '@angular/http';
import { apiValues } from '../../app.component';
import { Console } from '@angular/core/src/console';
import { getAllGroups } from '../../api-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  constructor() {
  }
  ngOnInit() {
  }
}
