/**
 * Created by daviD on 09/05/2017.
 */

import {Injectable} from "@angular/core";
import {USERS} from "./mock.users";
import {User} from "./user";

@Injectable()
export class UserService{

    getUsers(): Promise<User[]>{
        return Promise.resolve(USERS);
    }

    getUsersSlowly(): Promise<User[]> {

        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getUsers()), 2000);
        });
    }

}