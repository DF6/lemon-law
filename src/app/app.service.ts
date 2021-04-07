import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public addZero(num: number): string {
    const ret: string = num < 10 ? '0' + num : '' + num;
    return ret;
  }

}
