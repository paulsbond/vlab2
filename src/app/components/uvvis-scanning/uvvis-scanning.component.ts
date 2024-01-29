import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { decimal_places } from '../../code/utils';
import { NgForm } from '@angular/forms';
import { UvVis } from '../../code/uvvis';
import { UvvisService } from 'src/app/pages/uvvis/uvvis.service';
import { SettingsService } from 'src/app/pages/settings/settings.service';

@Component({
  selector: 'app-uvvis-scanning',
  templateUrl: './uvvis-scanning.component.html',
  styleUrls: ['./uvvis-scanning.component.css']
})
export class UvvisScanningComponent implements OnInit {
  @Input() uvvis: UvVis = new UvVis();
  nm_range: string = 'FULL';
  error: string = '';

  @ViewChild('form', { static: true }) form!: NgForm;
  formChangesSubscription: any;

  constructor(private service: UvvisService, private settings: SettingsService) { }
  ngOnInit(): void {
    this.formChangesSubscription = this.form.valueChanges!.subscribe(
      (values) => {
        if (values.nm_range === 'CUSTOM') {
          if (!values.min_nm) {
            this.error = 'Min Wavelength is required';
          } else if (!values.max_nm) {
            this.error = 'Max Wavelength is required';
          } else if (values.min_nm < 190 || values.min_nm > 1100) {
            this.error = 'Min Wavelength must be 190 to 1100';
          } else if (values.max_nm < 190 || values.max_nm > 1100) {
            this.error = 'Max Wavelength must be 190 to 1100';
          } else if (decimal_places(values.min_nm) > 1) {
            this.error = 'Min Wavelength must be specified to 1 d.p.';
          } else if (decimal_places(values.max_nm) > 1) {
            this.error = 'Max Wavelength must be specified to 1 d.p.';
          } else if (values.max_nm < values.min_nm + values.nm_per_reading) {
            this.error = 'Invalid settings';
          } else {
            this.error = '';
          }
        } else if (values.nm_range === 'FULL') {
          this.uvvis.min_nm = 190;
          this.uvvis.max_nm = 1100;
        } else if (values.nm_range === 'VISIBLE') {
          this.uvvis.min_nm = 350;
          this.uvvis.max_nm = 700;
        } else if (values.nm_range === 'UV') {
          this.uvvis.min_nm = 220;
          this.uvvis.max_nm = 400;
        }
      }
    );
  }

  scanStop(): void {
    if (this.uvvis.running) {
      this.uvvis.stop();
    }
    else {
      this.uvvis.scan(this.service.selectedSample.conc, this.settings.speed);
    }
  }

  exportCsv(): void {
    let content = 'Wavelength,Absorbance\n';
    this.uvvis.chart.data.forEach(point => {
      content += point[0].toFixed(1) + ',' + point[1].toFixed(4) + '\n';
    });
    var blob = new Blob([content], { type: 'text/csv' });
    var link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', 'uvvis.csv');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
