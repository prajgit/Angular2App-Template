import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Route } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'my-app',
    templateUrl: '/Views/Shared/Layout.html'
})

export class AppComponent {
    Title: string;

    constructor(private http: Http ) {
        this.Title = 'Hello World';
    }

    /**
     * 
     */
    authenticate() {
        this.http.post("/api/Authentication/Validate", { UserId: "Rajesh", Password:"Test"})
            .toPromise()
            .then(response => alert(response.text()))
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}