import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Profile } from './profile';
import "cleave.js/dist/addons/cleave-phone.us";
declare var Cleave: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cleaveForm: FormGroup;

  profile: Profile;
  date1: any;
  date2: any;
  creditcard: any;
  phone: any;
  time1: any;
  time2: any;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.cleaveForm = this.fb.group({
      date1: ['', Validators.required],
      date2: ['', Validators.required],
      creditcard: ['', Validators.required],
      phone: ['', Validators.required],
      time1: ['', Validators.required],
      time2: ['', Validators.required],
    });

    this.date1 = new Cleave('#date1', {
      date: true,
      delimiter: '-',
      datePattern: ['Y', 'm', 'd']
    });

    this.date2 = new Cleave('#date2', {
      date: true,
      datePattern: ['m', 'y']
    });

    this.creditcard = new Cleave('#creditcard', {
      delimiter: ' ',
      blocks: [4, 4, 4, 4],
    });

    this.phone = new Cleave('#phone', {
      phone: true,
      country: 'us',
      phoneRegionCode: 'US'
    });

    this.time1 = new Cleave('#time1', {
      time: true,
      timePattern: ['h', 'm', 's']
    });

    this.time2 = new Cleave('#time2', {
      time: true,
      timePattern: ['h', 'm']
    });
  }

  onSubmit() {
    if (this.cleaveForm.valid) {
      console.log("Res: ", this.cleaveForm.getRawValue());      
    }
  }  
}
