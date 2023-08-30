import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { decimal_places } from '../../code/utils';

export interface DilutionResult {
  label: string;
  sample_volume: number;
  flask_volume: number;
}

@Component({
  selector: 'app-dilution',
  templateUrl: './dilution.component.html',
  styleUrls: ['./dilution.component.css'],
})
export class DilutionComponent implements OnInit {
  @Output() diluted = new EventEmitter<DilutionResult>();
  label: string = '';
  volume: number = 0.1;
  flasks = [
    { name: '5 ml', volume: 5 },
    { name: '10 ml', volume: 10 },
    { name: '25 ml', volume: 25 },
    { name: '50 ml', volume: 50 },
    { name: '100 ml', volume: 100 },
    { name: '250 ml', volume: 250 },
  ];;
  flask = this.flasks[0];
  error: string = '';

  @ViewChild('form', { static: true }) form!: NgForm;
  formChangesSubscription: any;

  constructor() { }
  ngOnInit(): void {
    this.formChangesSubscription = this.form.valueChanges!.subscribe(
      (values) => {
        if (!values.label) {
          this.error = 'Label is required';
        } else if (!values.volume) {
          this.error = 'Sample volume is required';
        } else if (values.volume > values.flask.volume) {
          this.error = 'Sample will not fit in the flask';
        } else if (decimal_places(values.volume) > 1) {
          this.error = 'Can only measure sample to 1 d.p.';
        } else {
          this.error = '';
        }
      }
    );
  }

  ngOnDestroy() {
    this.formChangesSubscription.unsubscribe();
  }

  dilute(): void {
    this.diluted.emit({
      label: this.label,
      sample_volume: this.volume,
      flask_volume: this.flask.volume,
    });
    this.label = '';
  }
}
