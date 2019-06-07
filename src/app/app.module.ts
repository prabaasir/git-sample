import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MpcComponent } from './mpc/mpc.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MpcComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
