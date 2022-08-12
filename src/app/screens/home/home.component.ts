import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  userForm!:FormGroup;
  constructor(private dataService: DataService, private fb: FormBuilder) { }
  submitted: boolean = false;



  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['',Validators.required,],
    })
  }

  get userFormControls(){
    return this.userForm.controls;
  }

  onSubmit(form:FormGroup): void {
    this.submitted = true;
    if(form.valid){
      this.dataService.onUpdateData(form.value)
      form.reset();
      this.submitted = false;
    }
  }

}
