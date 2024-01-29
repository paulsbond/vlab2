import { Component } from '@angular/core';
import { DilutionResult } from '../../components/dilution/dilution.component';
import { random } from '../../code/utils';
import { UvvisService } from './uvvis.service';

@Component({
  selector: 'app-uvvis',
  templateUrl: './uvvis.component.html',
  styleUrls: ['./uvvis.component.css']
})
export class UvvisComponent {
  constructor(public service: UvvisService) { }

  onDiluted(result: DilutionResult) {
    const sample_volume = result.sample_volume * random(0.99, 1.01);
    const total_volume = result.flask_volume + random(-0.1, 0.1);
    const conc = this.service.selectedSample.conc * (sample_volume / total_volume);
    this.service.addSample(result.label, conc);
  }
}
