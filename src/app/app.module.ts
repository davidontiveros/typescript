/**
 * Created by daviD on 07/05/2017.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserDetailComponent }  from './user-detail.component';
import {UsersComponent} from "./users.component";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        UsersComponent,
        UserDetailComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}