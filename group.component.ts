import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { HttpClient } from 'selenium-webdriver/http';
import { Http } from '@angular/http';
import { Group233 } from '../../group233';
import { group } from '@angular/animations';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  //declarare de vector de tip Group233 (clasa definita in "group233.ts")
  group233: Group233[]=[];
  i: number;

  //initializarea elementelor vectorului group233
  constructor() {
    this.i = 0;
    this.group233[this.i] = new Group233(0, "Leustean I", "Programare Logica", "amfiteatru", 2, 12, 14);
    this.i++;
    this.group233[this.i] = new Group233(0, "Muntanu D", "Programare Avansata pe Obiecte", "laborator", 303, 8, 10);
    this.i++;
    this.group233[this.i] = new Group233(0, "Prunescu M", "Metode de Dezvolatare Software", "laborator", 309, 10, 12);
    this.i++;
    this.group233[this.i] = new Group233(0, "Hristea F", "Inteligenta Artificiala", "curs", 3, 12, 14);
    this.i++;
    this.group233[this.i] = new Group233(0, "Ionescu R", "Inteligenta Artificiala", "curs", 3, 12, 14);
    this.i++;
    this.group233[this.i] = new Group233(0, "Noaica C", "Inteligenta Artificiala", "laborator", 308, 14, 16);
    this.i++;
    this.group233[this.i] = new Group233(1, "Turlea A", "Programare Logica", "laborator", 218, 16, 18);
    this.i++;
    this.group233[this.i] = new Group233(0, "Stefanescu A", "Metode de Dezvoltare Software", "curs", 3, 10, 12);
    this.i++;
    this.group233[this.i] = new Group233(2, "Moanga N", "Baza de Date", "laborator", 221, 12, 14);
    this.i++;
    this.group233[this.i] = new Group233(2, "Moanga N", "Baza de Date", "laborator", 221, 14, 16);
    this.i++;
    this.group233[this.i] = new Group233(2, "Moanga N", "Baza de Date", "laborator", 221, 16, 18);
    this.i++;
    this.group233[this.i] = new Group233(1, "Moanga N", "Baza de Date", "laborator", 221, 14, 16);
    this.i++;
    this.group233[this.i] = new Group233(1, "Moanga N", "Baza de Date", "laborator", 221, 16, 18);
    this.i++;
    this.group233[this.i] = new Group233(0, "Nisioi S", "Retele Calc", "laborator", 322, 18, 20);
    this.i++;
    this.group233[this.i] = new Group233(0, "Boriga R", "Programare Avansata pe Obiecte", "curs", 0, 12, 14);
    this.i++;
    this.group233[this.i] = new Group233(1, "Moanga N", "Baze de Date", "laborator", 221, 14, 16);//15
    this.i++;
    this.group233[this.i] = new Group233(2, "Turlea A", "Programare Logica", "laborator", 218, 14, 16);
    this.i++;
    this.group233[this.i] = new Group233(0, "Turlea A", "Programare Logica", "seminar", 3, 14, 16);
    this.i++;
    this.group233[this.i] = new Group233(2, "Noaica C", "Inteligenta Artificiala", "laborator", 310, 16, 18);//18
    this.i++;
    this.group233[this.i] = new Group233(2, "Noaica C", "Inteligenta Artificiala", "laborator", 310, 16, 18);//19
    this.i++;
    this.group233[this.i] = new Group233(1, "Noaica C", "Inteligenta Artificiala", "laborator", 310, 18, 20);
    this.i++;
    this.group233[this.i] = new Group233(1, "Noaica C", "Inteligenta Artificiala", "laborator", 310, 18, 20);//21
    this.i++;
    this.group233[this.i] = new Group233(0, "Marin Le", "Baze de Date", "curs", 1, 8, 10);
    this.i++;
    this.group233[this.i] = new Group233(0, "Dinu L", "Retele Calc", "curs", 2, 10, 12);
  }

  ngOnInit() {
  }

}
