import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Entry } from '../_models/entry';
import { User } from '../_models/user';
import { baseUrl } from '../_shared/baseUrl';
import { ErrorService } from './error.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private userService: UserService,
  ) { }

  getEnteries(userID: string): Observable<Entry[]> {
    let url = baseUrl + '/enteries?userid=' + userID;
    console.log('accessing url ', url, " for enteries of id: ", userID);

    return this.http.get<Entry[]>(url)
      .pipe(catchError(this.errorService.printError));
  }
  addEntry(userID: string, entry: Entry): Observable<Entry> {
    const options = {
      headers: new HttpHeaders({
        'dataType': 'application/json'
      })
    };
    return this.http.post<Entry>(baseUrl + '/enteries/', entry, options)
      .pipe(catchError(this.errorService.printError));
  }
}
