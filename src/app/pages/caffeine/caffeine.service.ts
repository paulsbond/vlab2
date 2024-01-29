import { Injectable } from '@angular/core';
import { Chromatograph } from '../../code/chromatograph';
import { Gaussian } from '../../code/gaussian';
import { random } from '../../code/utils';
import { SettingsService } from '../settings/settings.service';

export class Sample {
  hplc = new Chromatograph(360, 15, 1200);

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
export class CaffeineService {
  samples = [
    new Sample("Caffeine 100 μg/mL", 100, "stock", "vol100.png"),
    new Sample("Builders Tea", 281.25, "unknown", "tea.png"),
    new Sample("Expresso Coffee", 825.0, "unknown", "coffee.png"),
    new Sample("Americano", 307.5, "unknown", "coffee.png"),
    new Sample("Decaf Tea", 18.75, "unknown", "tea.png"),
    new Sample("Decaf Americano", 13.89, "unknown", "coffee.png"),
    new Sample("Green Tea", 246.53, "unknown", "tea.png"),
    new Sample("Earl Grey", 166.67, "unknown", "tea.png"),
    new Sample("Everyday Tea", 106.25, "unknown", "tea.png"),
    new Sample("Latte", 197.92, "unknown", "coffee.png"),
  ];
  actions = ["Dilution", "HPLC"];
  selectedSample = this.samples[0];
  selectedAction = this.actions[0];

  constructor(private settings: SettingsService) { }

  addSample(label: string, conc: number) {
    this.samples.push(new Sample(label, conc));
  }

  inject() {
    const height = ((this.selectedSample.conc * 1200) / 85) * random(0.995, 1.005);
    const position = 240 * random(0.995, 1.005);
    const sd = 2.5 * random(0.995, 1.005);
    const gaussian = new Gaussian(height, position, sd);
    this.selectedSample.hplc.inject(gaussian, this.settings.speed);
  }
}
