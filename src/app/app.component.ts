import {Component} from "@angular/core";
/**
 * Created by daviD on 11/05/2017.
 */

@Component({
    selector: 'my-app',

    template: `
        <h1>Users</h1>
        <users></users>
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

export class AppComponent{

}