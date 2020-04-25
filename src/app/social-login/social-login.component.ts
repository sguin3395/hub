import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-social-login',
    templateUrl: './social-login.component.html',
    styleUrls: ['./social-login.component.scss']
})

export class SocialComponent implements OnInit {

    constructor(private authService: AuthService) { }

    public signInWithGoogle = (): void => {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    public signInWithFB = (): void => {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    public signOut(): void {
        this.authService.signOut();
    }
    ngOnInit(){}
}
