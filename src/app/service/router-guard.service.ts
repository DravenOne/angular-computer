import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';

@Injectable()
export class RouterGuard implements CanActivate{
    isLoggedIn = false;
    redirectUrl: string;

    constructor(private router: Router){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        let url:string = state.url;
        return this.checkLogin(url);
    }
    checkLogin(url:string):boolean{
        if(this.isLoggedIn){
            return true;
        }
        this.redirectUrl = url;
        this.router.navigate(['/main']);
        return false;
    }
}