import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ContentComponent } from './components/content/content.component';
import { getAllRouteGuards } from '@angular/router/src/utils/preactivation';
export function getAllGroups() { };

const appointmentRootUrl = 'http://localhost:49941/api/appointment/';
const groupsRootUrl = 'http://localhost:49941/api/group/';
const teachersRootUrl = 'http://localhost:49941/api/teacher/';
const subjectsRootUrl = 'http://localhost:49941/api/subject/';
const roomsRootUrl = 'http://localhost:49941/api/room/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor(private http: HttpClient) { } 
 
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  // appointments
  getAppointmentsByGroupAndWeekParity(id,weekParity): Observable<any> {
    
    const  params = new  HttpParams().set('groupId', id).set('weekParity', weekParity);
    
    return this.http.get(appointmentRootUrl + 'GetAppointmentsByGroupAndWeekParity',{params}).pipe(
      map(this.extractData));
  }
  getAppointmentsByGroupAndWeekDay(id, weekDay): Observable<any> {
    
    const  params = new  HttpParams().set('groupId', id).set('weekDay', weekDay);
    
    return this.http.get(appointmentRootUrl + 'GetAppointmentsByGroupAndWeekDay',{params}).pipe(
      map(this.extractData));
  }
  getAppointmentsByTeacherAndWeekParity(id, weekParity): Observable<any> {
    
    const  params = new  HttpParams().set('teacherId', id).set('weekParity', weekParity);
    
    return this.http.get(appointmentRootUrl + 'GetAppointmentsByTeacherAndWeekParity',{params}).pipe(
      map(this.extractData));
  }
  getAppointmentsByTeacherAndWeekDay(id, weekDay): Observable<any> {
    
    const  params = new  HttpParams().set('teacherId', id).set('weekDay', weekDay);
    
    return this.http.get(appointmentRootUrl + 'getAppointmentsByTeacherAndWeekDay',{params}).pipe(
      map(this.extractData));
  }
  getAppointmentsByWeekDayAndRoom(weekday, roomId, searchedHour): Observable<any> {
    
    const  params = new  HttpParams().set('weekday', weekday).set('roomId', roomId).set('searchedHour', searchedHour);
    
    return this.http.get(appointmentRootUrl + 'getAppointmentsByWeekDayAndRoom',{params}).pipe(
      map(this.extractData));
  }
  getAppointmentsByGroupAndSubject(groupId, subjectId, weekParity): Observable<any> {
    
    const  params = new  HttpParams().set('groupId', groupId).set('subjectId', subjectId).set('weekParity', weekParity);
    
    return this.http.get(appointmentRootUrl + 'getAppointmentsByGroupAndSubject',{params}).pipe(
      map(this.extractData));
  }
  getAppointmentsByWeekDayAndSubject(weekday, subjectId): Observable<any> {
    
    const  params = new  HttpParams().set('weekday', weekday).set('subjectId', subjectId);
    
    return this.http.get(appointmentRootUrl + 'getAppointmentsByWeekDayAndSubject',{params}).pipe(
      map(this.extractData));
  }
  // groups
  getAllGroups(): String {
    let ret: String;
    ret = this.http.get(teachersRootUrl + 'GetAllGroups', { responseType: 'text' }).pipe(
      map(String, this.extractData)).toString();
    return ret.toString();
  
  }
  // teachers
  getTeachers(): Observable<any> {
    return this.http.get(groupsRootUrl + 'GetTeachers').pipe(
      map(this.extractData));
    
  }
  // rooms
  getRooms(): Observable<any> {
    
      return this.http.get(roomsRootUrl + 'GetRooms').pipe(
        map(this.extractData));
      
  }
  // subjects  
  getSubjects(): Observable<any> {
    
      return this.http.get(subjectsRootUrl + 'GetSubjects').pipe(
        map(this.extractData));
    
  }
  
}
