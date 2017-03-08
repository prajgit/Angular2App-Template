import { Component } from '@angular/core';

@Component({
    selector: 'contact-us',
    templateUrl: 'views/contactus/index.html'
})
export class ContactusComponent {
    Title: string;
    constructor() {
        this.Title = 'Hello World111';
    }
}