import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { decimal_places } from '../../code/utils';

export interface UvVisFixedResult {
  wavelength: number;
  cuvette_cm: number;
}

@Component({
  selector: 'app-uvvis-fixed',
  templateUrl: './uvvis-fixed.component.html',
  styleUrls: ['./uvvis-fixed.component.css']
})
export class UvvisFixedComponent implements OnInit {
  @Output() submitted = new EventEmitter<UvVisFixedResult>();
  wavelength: number = 190;
  cuvette_cm: number = 1;
  error: string = '';

  @ViewChild("form", { static: true }) form!: NgForm;
  formChangesSubscription: any;

  constructor() { }

  ngOnInit(): void {
    this.formChangesSubscription = this.form.valueChanges!.subscribe(
      (values) => {
        if (!values.wavelength) {
          this.error = 'Wavelength is required';
        } else if (values.wavelength < 190 || values.wavelength > 1100) {
          this.error = 'Wavelength must be 190 to 1100 nm';
        } else if (decimal_places(values.wavelength) > 1) {
          this.error = 'Wavelength must be specified to 1 d.p';
        } else {
          this.error = '';
        }
      }
    );
  }

  ngOnDestroy() {
    this.formChangesSubscription.unsubscribe();
  }

  submit(): void {
    this.submitted.emit({
      wavelength: this.wavelength,
      cuvette_cm: this.cuvette_cm,
    });
  }
}
