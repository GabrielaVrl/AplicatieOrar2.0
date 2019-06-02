import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

  //variabilele showi, cu i apartinand intervalului [1,4], au initial valuarea FALSE pentru a marca faptul ca butonul respectiv nu a fost actionat
  public show1: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;
  public show4: boolean = false;
  public selectedGroup: string = '';

  constructor() {
  }
    

  ngOnInit() {
  }

  //functia respectiva primeste valoarea evenimentului recent efectuat, cand este apelata in "menu.component.html" file
  selectChangeHandler(event: any) {
    this.selectedGroup = event.target.value;
  }

  //functia tooglei() (cu i apartinand [1,4]) "activeaza" variabila showi,
  //pentru a marca faptul ca a fost actionat butonul Grupa, Profesor, Materie si respectiv Sala
  //deasemenea este testata valoarea lui showi in "menu.component.html" file
  toogle1() {
    this.show1 = true;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
  }

  toogle2() {
    this.show1 = false;
    this.show2 = true;
    this.show3 = false;
    this.show4 = false;
  }
  toogle3() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = true;
    this.show4 = false;
  }
  toogle4() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = true;
  }
}
