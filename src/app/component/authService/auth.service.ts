import {Injectable} from '@angular/core';

@Injectable()
export class AuthService{
    flag:boolean;
    constructor(){
        this.flag=false;
    }
    loggedIn(){
        return this.flag;
    }
}