import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})

export class StudentFormComponent implements OnInit {
  addStudentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.addStudent();
  };

  addStudent(){
    this.addStudentForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(10)]],
      email:['',[Validators.required,Validators.email]],
    })  
  };

  submitStudentForm(){
    console.log(this.addStudentForm.value);
  };

}
