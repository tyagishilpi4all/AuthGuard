import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../authService/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    flag:boolean;
    constructor(private _authService:AuthService , private _router:Router){
        this.flag=false;
    }
    canActivate(){
        if(this._authService.loggedIn){
            // this._router.navigate(['/angular'])
            return true;
        }
        else{
            return false;
        }
       
    }
}