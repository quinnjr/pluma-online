import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'biorg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: any;
  public isSubmitted: boolean = false;

  constructor() { }

  public ngOnInit(): void {
  }

  public onSubmit() {

  }

}
