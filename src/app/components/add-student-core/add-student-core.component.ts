import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student-core',
  templateUrl: './add-student-core.component.html',
  styleUrls: ['./add-student-core.component.css']
})
export class AddStudentCoreComponent implements OnInit {
  step: any = 1;
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.step = this.step + 1;
  }
  back(){
    this.step = this.step - 1;
  }
}