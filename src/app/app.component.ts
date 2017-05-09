/**
 * Created by daviD on 07/05/2017.
 */
import {Component, OnInit} from '@angular/core';
import { User } from './user';
import {UserService} from './user.service'

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
    `],

    providers: [UserService]
})

// THIS SHOULD AFTER @Component code .. ORDER MATTERS!
// logic & public properties exposed to view for binding
export class AppComponent implements OnInit{

    users: User[];
    selectedUser:User;

    // needed for service injection
    constructor(private userService: UserService) {}

    loadUsers(): void {
        this.userService.getUsers().then(result => this.users = result);

    }

    onSelectUser(user:User): void{
        this.selectedUser = user;
    }

    ngOnInit(): void{
        this.loadUsers();
    }
}