import { CaffeineService } from './caffeine.service';
import { Component } from '@angular/core';
import { DilutionResult } from '../../components/dilution/dilution.component';
import { random } from '../../code/utils';

@Component({
  selector: 'app-caffeine',
  templateUrl: './caffeine.component.html',
  styleUrls: ['./caffeine.component.css']
})
export class CaffeineComponent {
  constructor(public service: CaffeineService) { }

  onDiluted(result: DilutionResult) {
    const sample_volume = result.sample_volume * random(0.99, 1.01);
    const total_volume = result.flask_volume + random(-0.1, 0.1);
    const conc = this.service.selectedSample.conc * (sample_volume / total_volume);
    this.service.addSample(result.label, conc);
  }
}
