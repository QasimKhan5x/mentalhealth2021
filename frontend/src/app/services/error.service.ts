import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ErrorService {

  constructor() { }
  /**
   * Log the error onto the console and then rethrow it.
   * @param err Takes the HttpErrorResponse
   * @returns logs the error and then rethrows it.
   */
  printError(err: HttpErrorResponse | any) {
    console.log(err);
    return throwError(err);
  }
}
