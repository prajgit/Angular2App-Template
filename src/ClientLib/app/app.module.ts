import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ContactusComponent } from './contactus/contactus.component';
import { AppComponent } from './app.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ContactusComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }