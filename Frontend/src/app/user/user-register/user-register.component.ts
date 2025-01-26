import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { AlertifyService } from '../../services/alertify.service';



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm!: FormGroup;
  user !: User;
  userSubmitted !: boolean;

  constructor(private fb: FormBuilder, private userService : UserService, private alertify: AlertifyService) { }

  ngOnInit() {
/*     
    this.registerationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])

    },
    { validators : this.passwordMatchiingValidator }
  );
   */
  this.createRegisterationForm();
  }

  createRegisterationForm(){
    this.registerationForm = this.fb.group({
      userName : [null, Validators.required],
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword : [null, [Validators.required]],
      mobile : [null, [Validators.required, Validators.maxLength(10)]]
    },{validators : this.passwordMatchiingValidator})
  }

  passwordMatchiingValidator(control: AbstractControl){
    const fg = control as FormGroup;
    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirmPassword')?.value;

    return password === confirmPassword ? null : {
      notmatched: true
    }
  }


  onSubmit(){
    console.log(this.registerationForm);

    this.userSubmitted = true;

    if(this.registerationForm.valid){
      //this.user = Object.assign(this.user, this.registerationForm.value);
      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted = false;

      this.alertify.success('Your account has been created!');
    }else{
      this.alertify.error('Fill the fields correctly before creating an account');
      
    }
  }

  userData() : User{
    return this.user = {
      userName : this.userName.value,
      email : this.email.value,
      password : this.password.value,
      mobile : this.mobile.value

    }
  }



  // Getters
  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }

  get password(){
    return this.registerationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }

}
