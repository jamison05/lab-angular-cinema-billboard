import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MyhomeComponent } from './myhome/myhome.component';
import { MymovieComponent } from './mymovie/mymovie.component';
import { AppComponent } from './app.component';
const myRoutes: Routes = [
    // localhost:4200
    { path: '',                    component:MyhomeComponent },

    // localhost:4200/contacts
    { path: 'mymovie',            component: MymovieComponent }]


@NgModule({
  declarations: [
    AppComponent,
    MyhomeComponent,
    MymovieComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
