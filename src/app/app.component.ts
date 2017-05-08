/**
 * Created by daviD on 07/05/2017.
 */
import { Component } from '@angular/core';
import { User } from './user';


const USERS: User[] = [
    {id: 1, name: 'David Ontiveros', phone: '8115770042'}
    ,{id: 2, name: 'Miguel Leon', phone: ''}
    ,{id: 3, name: 'Rosario Sifuentes', phone: ''}
    ,{id: 4, name: 'Beto Ontiveros', phone: ''}
];


@Component({
    selector: 'my-app',
    template: `
        <h1>Users</h1>

        <ul class="user-list">
            <li *ngFor="let user of users" 
                (click)="onSelectUser(user)"  
                [class.selected]="user === selectedUser">
                <span><b>{{user.name}}</b></span>
                <span><i>[{{user.phone}}]</i></span>
            </li>
        </ul>
        
        <user-detail [user]="selectedUser"></user-detail>
    `,
    styles: [`
        .user-list li{
            cursor: pointer;   
        }
        
        .user-list li:hover {
            color: #607D8B;
            background-color: #DDD;
        }

        .user-list li.selected {
            background-color: #BBD8DC !important;
            color: white;
        }
    `]
})

// THIS SHOULD AFTER @Component code .. ORDER MATTERS!
// logic & public properties exposed to view for binding
export class AppComponent {

    users = USERS;

    selectedUser:User;

    onSelectUser(user:User): void{
        this.selectedUser = user;
    }
}