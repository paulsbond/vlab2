import { Injectable } from '@angular/core';
import { Chart } from '../../code/chart';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  public chart: Chart = new Chart('E (V)', 'Current (I)/A', -0.5, 0.6, -4E-6, 8E-6);
  public ferrocene_conc: number = 1; // mM
  public liclo4_conc: number = 1; // mM
  public material: string = 'Pt QRE';
  public scan_rate: number = 200; // mV/s
  public min_voltage: number = -0.5;
  public max_voltage: number = 0.6;

  constructor() { }

  public simulate() {
    // TODO
  }
}
