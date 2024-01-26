import { Injectable } from '@angular/core';
import { random } from '../../code/utils';

export class Sample {
  conductivity: number | string = '-';

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
export class SaltService {
  samples = [
    new Sample("0.5 M Aqueous NaCl", 0.5, "stock", "vol250.png"),
    new Sample("Cheeseburger", 0.002665, "unknown", "burger.png"),
    new Sample("Chips", 0.0005557, "unknown", "chips.png"),
    new Sample("Margherita Pizza", 0.001096, "unknown", "margherita.png"),
    new Sample("Pepperoni Pizza", 0.001071, "unknown", "pepperoni.png"),
    new Sample("Chicken Korma and Rice", 0.0008053, "unknown", "curry.png"),
  ];
  actions = ["Dilution", "Conductivity"];
  selectedSample = this.samples[0];
  selectedAction = this.actions[0];

  constructor() { }

  addSample(label: string, conc: number) {
    this.samples.push(new Sample(label, conc));
  }

  read() {
    const conc = this.selectedSample.conc;
    const raw = (126500 * conc - 101265 * conc ** 1.5) * random(0.995, 1.005);
    const rounded = Math.round(raw);
    this.selectedSample.conductivity = rounded > 9999 ? 'HIGH' : rounded;
  }
}
