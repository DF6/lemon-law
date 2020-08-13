import { Injectable } from '@angular/core';

@Injectable()

export class AppService {

    constructor() {}

    public addZero(number) {
        return number < 10 ? '0' + number : number;
    }

}