import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CvService } from './cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  public error: string = '';
  @ViewChild('form', { static: true }) form!: NgForm;
  formChangesSubscription: any;

  constructor(public service: CvService) { }

  ngOnInit(): void {
    this.formChangesSubscription = this.form.valueChanges!.subscribe(
      (values) => {
        if (values.ferrocene_conc < 0 || values.liclo4_conc < 0) {
          this.error = 'Concentration cannot be negative';
        } else {
          this.error = '';
        }
      }
    )
  }
}
