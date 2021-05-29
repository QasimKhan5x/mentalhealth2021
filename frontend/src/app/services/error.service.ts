import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ErrorService {

  constructor() { }

  printError(err: HttpErrorResponse | any) {
    console.log(err);
    return throwError(err);
  }
}
