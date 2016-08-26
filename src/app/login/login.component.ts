import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { CredentialHandler } from '../services'


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'login'
  selector: 'login',  // <login></login>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './login.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './login.template.html'
})
export class Login {
  private formsErrors:any[];
  private loginForm: FormGroup;
  private fb:FormBuilder;
  private user:any;
  private credentialHandler:CredentialHandler;

  constructor() { }

  ngOnInit() {
    console.log('hello `Login` component');
    this.loginForm = this.fb.group({});
    this.initForm();
  }
  ngOnDestroy() {

  }

  initForm() {
    var vm = this;
    this.loginForm = this.fb.group({
      'login': [
        this.user.login,
        [
          Validators.required
        ]
      ],
      'pwd': [
        this.user.pwd,
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ]
    });
  }

  onSubmit(){
    console.log('Form submited');
    console.log(this.loginForm);
    let checkForm = this.credentialHandler.checkCredentials(this.loginForm.controls['login'].value, this.loginForm.controls['pwd'].value);

  }



}
