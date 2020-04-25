import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { NgModule } from '@angular/core';
import { SocialComponent } from './social-login.component';

const config = new AuthServiceConfig([{
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('Google-OAuth-Client-Id')
}, {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('Facebook-App-Id')
}]);

export function provideConfig() {
  return config;
}

@NgModule({
    declarations: [
      // AppComponent
      SocialComponent
    ],
    imports: [
        SocialLoginModule
    ],
    providers: [{
        provide: AuthServiceConfig,
        useFactory: provideConfig
    }]
})

export class HubSocialLoginModule {
}
