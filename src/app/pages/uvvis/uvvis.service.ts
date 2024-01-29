import { Injectable } from '@angular/core';
import { UvVis } from '../..//code/uvvis';

export class Sample {
  uvvis = new UvVis();

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
  samples = [
    new Sample("KMnO4 5.00E-4 Molar", 0.0005, "stock", "vol100.png")
  ];
  actions = ["Dilution", "UV-Vis (Fixed)", "UV-Vis (Scanning)"];
  selectedSample = this.samples[0];
  selectedAction = this.actions[0];

  constructor() { }

  addSample(label: string, conc: number) {
    this.samples.push(new Sample(label, conc));
  }
}
