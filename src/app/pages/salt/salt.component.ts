import { Component } from '@angular/core';
import { DilutionResult } from '../../components/dilution/dilution.component';
import { random } from '../../code/utils';
import { SaltService } from './salt.service';

@Component({
  selector: 'app-salt',
  templateUrl: './salt.component.html',
  styleUrls: ['./salt.component.css']
})
export class SaltComponent {
  constructor(public service: SaltService) { }

  onDiluted(result: DilutionResult) {
    const sample_volume = result.sample_volume * random(0.99, 1.01);
    const total_volume = result.flask_volume + random(-0.1, 0.1);
    const conc = this.service.selectedSample.conc * (sample_volume / total_volume);
    this.service.addSample(result.label, conc);
  }
}
