import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { decimal_places } from '../../code/utils';
import { UvVis } from 'src/app/code/uvvis';
import { UvvisService } from 'src/app/pages/uvvis/uvvis.service';

@Component({
  selector: 'app-uvvis-fixed',
  templateUrl: './uvvis-fixed.component.html',
  styleUrls: ['./uvvis-fixed.component.css']
})
export class UvvisFixedComponent implements OnInit {
  @Input({ required: true }) uvvis!: UvVis;
  error: string = '';

  @ViewChild("form", { static: true }) form!: NgForm;
  formChangesSubscription: any;

  constructor(private service: UvvisService) { }

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

  read() {
    this.uvvis.read(this.service.selectedSample.conc);
  }
}
