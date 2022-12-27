import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators , FormGroup} from '@angular/forms';

interface Animal {
  name: string;
  sound: string;
}
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameControl = new FormControl('', Validators.required);
  lnamecontrol = new FormControl('', Validators.required);
  cityControl = new FormControl('', Validators.required);
  phNoControl = new FormControl('', Validators.required);
  ageControl = new FormControl('', Validators.required);
  feeControl = new FormControl('', Validators.required);


  animalControl = new FormControl<Animal | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    { name: 'Male', sound: 'Male!' },
    { name: 'Female', sound: 'Female!' },
  ];

  foods: Food[] = [
    {value: 'BSc', viewValue: 'BSc'},
    {value: 'BCom', viewValue: 'BCom'},
    {value: 'BTech', viewValue: 'BTech'},
  ];

  foodControl = new FormControl(this.foods[0].value);

  constructor() {}

  ngOnInit(): void {}
}
