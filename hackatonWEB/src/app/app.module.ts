import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHeaderInterceptor } from './client/add-header-interceptor';
import { AuthService } from './services/auth.service';
import { ConfigurationService } from './services/configuration.service';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavigationComponent } from './pages/main/navigation/navigation.component';
import { UserComponent } from './pages/main/user/user.component';


const InitializeConfig = (appConfig: ConfigurationService) => {
  return () => {
    return appConfig.loadConfig();
  }
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    DashboardComponent,
    NavigationComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AddHeaderInterceptor,
    multi: true,
    deps: [AuthService]
  },
  {
    provide: APP_INITIALIZER,
    useFactory: InitializeConfig,
    multi: true,
    deps: [ConfigurationService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
