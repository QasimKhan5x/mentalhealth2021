import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Entry } from '../_models/entry';
import { baseUrl } from '../_shared/baseUrl';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  addEntry(userId: string, entry: Entry): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'dataType': 'application/json'
      })
    };
    return this.http.put(baseUrl + '/users/' + userId + '/entries/', entry, options)
      .pipe(catchError(this.errorService.printError));
  }
}
