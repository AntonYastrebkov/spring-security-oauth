import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {AppService} from './app.service'

@Component({
  selector: 'login-form',
  providers: [AppService],
  template: `
    <div class="col-sm-6">
        <h1>Login</h1>
        <div class="col-sm-12 form-group">
             <label>Username</label>
             <input class="form-control" type="text" [(ngModel)]="loginData.username" />
        </div>
        <div class="col-sm-12 form-group">
            <label>Password</label>
            <input class="form-control" type="password"  [(ngModel)]="loginData.password"/>
        </div>
        <div class="col-sm-12">
            <button class="btn btn-primary pull-right" (click)="login()" type="submit">Login</button>
        </div>
    </div>
    <div class="col-sm-6">
            <h1>Register</h1>
            <div class="col-sm-12 form-group">
                 <label>Username</label>
                 <input class="form-control" type="text" [(ngModel)]="registerData.username" />
            </div>
            <div class="col-sm-12 form-group">
                <label>Password</label>
                <input class="form-control" type="password"  [(ngModel)]="registerData.password"/>
            </div>
            <div class="col-sm-12 form-group">
                <label>Email</label>
                <input class="form-control" type="email"  [(ngModel)]="registerData.email"/>
            </div>
            <div class="col-sm-12">
                <button class="btn btn-primary pull-right" (click)="register()" type="submit">Sign Up</button>
            </div>
        </div>`
})
export class LoginComponent {
    public loginData = {username: "", password: ""};
    public registerData = {username: "", password: "", email: ""};

    constructor(private _service:AppService, private _http:Http) {}

    login() {
        this._service.obtainAccessToken(this.loginData);
    }

// TODO: Add registration request
}
