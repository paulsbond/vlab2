import { Injectable } from '@angular/core';
import { Chromatograph } from '../../code/chromatograph';
import { Gaussian } from '../../code/gaussian';
import { random } from '../../code/utils';
import { SettingsService } from '../settings/settings.service';

export class Sample {
  gc = new Chromatograph(180, 50, 1000);

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
export class AlcoholService {
  samples = [
    new Sample("Ethanol 100%", 100, "stock", "ethanol.png"),
    new Sample("Lager", 2.9, "unknown", "pint.png"),
    new Sample("IPA", 4.6, "unknown", "pint.png"),
    new Sample("Stout", 3.6, "unknown", "pint.png"),
    new Sample("Cider", 5.3, "unknown", "pint.png"),
    new Sample("Shiraz", 14.2, "unknown", "wine.png"),
    new Sample("Sauvignon Blanc", 13.6, "unknown", "wine.png"),
    new Sample("Cabernet Sauvignon", 12.4, "unknown", "wine.png"),
    new Sample("Pinot Grigio", 13.9, "unknown", "wine.png"),
    new Sample("Gin", 37.5, "unknown", "spirit.png"),
    new Sample("Vodka", 40.2, "unknown", "spirit.png"),
    new Sample("Whisky", 38.5, "unknown", "spirit.png"),
    new Sample("Tequila", 36.4, "unknown", "spirit.png"),
    new Sample("Rum & Coke", 4.2, "unknown", "mixer.png"),
    new Sample("Gin & Tonic", 9.7, "unknown", "mixer.png"),
    new Sample("Vodka & Diet Coke", 7.4, "unknown", "mixer.png"),
    new Sample("Schnapps & Lemonade", 6.7, "unknown", "mixer.png"),
  ];
  actions = ["Dilution", "Gas Chromatography"];
  selectedSample = this.samples[0];
  selectedAction = this.actions[0];
  running = false;

  constructor(private settings: SettingsService) { }

  addSample(label: string, conc: number) {
    this.samples.push(new Sample(label, conc));
  }

  inject() {
    const height = ((this.selectedSample.conc * 1000) / 5.2) * random(0.995, 1.005);
    const position = 120 * random(0.995, 1.005);
    const sd = 5 * random(0.995, 1.005);
    const gaussian = new Gaussian(height, position, sd);
    this.selectedSample.gc.inject(gaussian, this.settings.speed);
  }
}
