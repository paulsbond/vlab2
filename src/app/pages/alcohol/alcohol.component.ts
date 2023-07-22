import { Component } from '@angular/core';
import { DilutionResult } from '../../components/dilution/dilution.component';
import { random } from '../../utils';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.css']
})
export class AlcoholComponent {
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

  onDiluted(result: DilutionResult) {
    const sample_volume = result.sample_volume * random(0.99, 1.01);
    const total_volume = result.flask_volume + random(-0.1, 0.1);
    const conc = this.selectedSample.conc * (sample_volume / total_volume);
    this.samples.push(new Sample(result.label, conc));
  }
}

class Sample {
  constructor(
    public label: string,
    public conc: number,
    public type: string = 'dilution',
    public image: string = 'vial.png'
  ) { }
}