import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';


import { CounterModule } from './counter/counter.module';
import { HeoresModule } from './heroes/herores.module';
import { DgzModule } from './dbz/dgz.module';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeoresModule,
    DgzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
