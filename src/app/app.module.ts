import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { DayOneComponent } from './pages/day-one/day-one.component';

import { DayTwoComponent } from './pages/day-two/day-two.component';
import { DayThreeComponent } from './pages/day-three/day-three.component';
import { DayFourComponent } from './pages/day-four/day-four.component';
import { DayFiveComponent } from './pages/day-five/day-five.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DayOneComponent,
    DayTwoComponent,
    DayThreeComponent,
    DayFourComponent,
    DayFiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'day-one', component: DayOneComponent },
      { path: 'day-two', component: DayTwoComponent },
      { path: 'day-three', component: DayThreeComponent },
      { path: 'day-four', component: DayFourComponent },
      { path: 'day-five', component: DayFiveComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
