import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { SignupUserRequest } from '../../models/interfaces/User/SignupUserRequest';
import { AuthResquest } from '../../models/interfaces/Auth/AuthRequest';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  loginCard = true;
  loginAuth = false;

  loginForm = this.formBuilder.group({
    email:['', Validators.required],
    password:['', Validators.required],
  });

  signupForm = this.formBuilder.group({
    name:['', Validators.required],
    email:['', Validators.required],
    password:['', Validators.required]
  });
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private cookService: CookieService,
    private messageService: MessageService,
    private router: Router
    ){}

  onSubmitLoginForm(): void {
    console.log("dados do formulario", this.loginForm.value);
    if(this.loginForm.value && this.loginForm.valid){
      this.userService.authUser(this.loginForm.value as AuthResquest)
      .subscribe({
        next:(response)=>{
          if(response){
            this.cookService.set('USER_INFOR', response?.token);
            this.loginForm.reset();
            this.router.navigate(['dashboard'])
            this.messageService.add({
              severity:'success',
              summary:'Sucesso',
              detail: `Bem vindo de volta ${response?.name}!`,
              life: 2000
            })

          }
        },
        error:(err) =>{
          this.messageService.add({
            severity:'success',
            summary:'Opa!',
            detail: 'Erro ao login, verifique email ou senha!',
            life: 2000
          })
          console.log(err)},
      })
    }

  }
  onSubmitSignupForm(): void {

    console.log("dados do formulario", this.signupForm.value);

    if(this.signupForm.value && this.signupForm.valid){
      this.userService.signupUser(this.signupForm.value as SignupUserRequest)
      .subscribe({
        next:(response)=>{
          if(response){
            this.signupForm.reset();
            this.loginCard = true;

            this.messageService.add({
              severity:'success',
              summary:'Sucesso',
              detail: 'Usuário criado com sucesso',
              life: 2000
            })

          }
        },
        error:(err) =>{
          this.messageService.add({
            severity:'success',
            summary:'Sucesso',
            detail: 'Erro ao criar usuário',
            life: 2000
          })
          console.log(err)}
      })
    }

  }

}
