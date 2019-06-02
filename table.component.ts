import { Component, OnInit } from '@angular/core';
import { getAllGroups } from "../../api-service.service";
import { ApiServiceService } from '../../api-service.service';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
