import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page } from './component/page/page.component';
import { Home } from './component/Home/home.component';
import { Java } from './component/java/java.component';
import { Angular } from './component/angular/angular.component';
import { routing } from './component/app.routing';
import { AuthGuard } from './component/guards/auth.guard';
import { AuthService } from './component/authService/auth.service';

@NgModule({
  declarations: [
    AppComponent,Page,Home,Java,Angular
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [
    AuthGuard , AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
