// Two number auto add and sub

// <div>
//   <label for="number1">Number 1:</label>
//   <input type="number" [(ngModel)]="number1" id="number1" (input)="calculate()">

//   <label for="number2">Number 2:</label>
//   <input type="number" [(ngModel)]="number2" id="number2" (input)="calculate()">

//   <p>Addition: {{ resultAdd }}</p>
//   <p>Subtraction: {{ resultSub }}</p>
// </div>

import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [BrowserModule, FormsModule, CommonModule],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  number1: number = 0;
  number2: number = 0;
  resultAdd: number = 0;
  resultSub: number = 0;

  calculate() {
    this.resultAdd = this.number1 + this.number2;
    this.resultSub = this.number1 - this.number2;
  }

  // Ngif
  // <div>
  //   <button (click)="toggleText()">Toggle Text</button>
  //   <p *ngIf="showText">This is the text to be toggled!</p>
  // </div>

  showText: boolean = false;

  toggleText() {
    this.showText = !this.showText;
  }

  // <div *ngFor="let item of items">
  //   <p>{{ item }}</p>
  // </div>

  items: string[] = ['Apple', 'Banana', 'Cherry'];

  // <div [ngSwitch]="currentColor">
  //   <p *ngSwitchCase="'red'">This is red</p>
  //   <p *ngSwitchCase="'green'">This is green</p>
  //   <p *ngSwitchCase="'blue'">This is blue</p>
  //   <p *ngSwitchDefault>This is a default color</p>
  // </div>
  // <button (click)="toggleColor()">Change Color</button>
  currentColor: string = 'red';

  toggleColor() {
    const colors = ['red', 'green', 'blue'];
    this.currentColor =
      colors[(colors.indexOf(this.currentColor) + 1) % colors.length];
  }

  //     <div class="login-container">
  //   <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
  //     <div>
  //       <label for="username">Username:</label>
  //       <input id="username" type="text" formControlName="username" />
  //       <div *ngIf="loginForm.controls['username'].invalid && loginForm.controls['username'].touched">
  //         Username is required.
  //       </div>
  //     </div>

  //     <div>
  //       <label for="password">Password:</label>
  //       <input id="password" type="password" formControlName="password" />
  //       <div *ngIf="loginForm.controls['password'].invalid && loginForm.controls['password'].touched">
  //         Password is required.
  //       </div>
  //     </div>

  //     <button type="submit" [disabled]="loginForm.invalid">Login</button>
  //   </form>
  // </div>
  //     import { Component } from '@angular/core';
  // import { FormGroup, FormBuilder, Validators } from '@angular/forms';

  // @Component({
  //   selector: 'app-root',
  //   templateUrl: './app.component.html',
  //   styleUrls: ['./app.component.css']
  // })
  // export class AppComponent {
  //   loginForm: FormGroup;

  //   constructor(private fb: FormBuilder) {
  //     this.loginForm = this.fb.group({
  //       username: ['', Validators.required],
  //       password: ['', Validators.required]
  //     });
  //   }

  //   onSubmit() {
  //     if (this.loginForm.valid) {
  //       console.log('Login successful:', this.loginForm.value);
  //     } else {
  //       console.log('Invalid form submission');
  //     }
  //   }
  // }
}
