import { Injectable } from '@angular/core';
import { Chart } from '../../code/chart';
import { random } from '../../code/utils';


export class Sample {
  constructor(
    public label: string,
    public conc: number,
    public type: string = 'dilution',
    public image: string = 'vial.png',
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class UvvisService {

  constructor() { }
}
