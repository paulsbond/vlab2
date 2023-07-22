import { Component } from '@angular/core';
import { DilutionResult } from '../../components/dilution/dilution.component';
import { random } from '../../utils';
import { AlcoholService } from './alcohol.service';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.css']
})
export class AlcoholComponent {
  constructor(public service: AlcoholService) { }

  onDiluted(result: DilutionResult) {
    const sample_volume = result.sample_volume * random(0.99, 1.01);
    const total_volume = result.flask_volume + random(-0.1, 0.1);
    const conc = this.service.selectedSample.conc * (sample_volume / total_volume);
    this.service.addSample(result.label, conc);
  }
}
