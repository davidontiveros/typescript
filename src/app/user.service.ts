/**
 * Created by daviD on 09/05/2017.
 */

import {Injectable} from "@angular/core";
import {USERS} from "./mock.users";
import {User} from "./user";

@Injectable()
export class UserService{

    getHeroes(): Promise<User[]>{
        return Promise.resolve(USERS);
    }

}