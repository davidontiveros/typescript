/**
 * Created by daviD on 07/05/2017.
 */
import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'user-detail',
    template: `
        <div *ngIf="user">
         <hr>
         <h2>{{user.name}}</h2>
         <label>Phone: </label><input type="text" [(ngModel)]="user.phone" placeholder="phone"/>
        </div>`
})

export class UserDetailComponent {
    @Input() user:User;
}