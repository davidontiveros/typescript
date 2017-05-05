/**
 * Created by daviD on 05/05/2017.
 */

import {sayHelloToConsole} from './salute';

interface Person
{
    firstname: string;
    lastname: string;
}

class SystemUser
{
    public firstname:string;
    public lastname:string;
    public fullName:string;

    constructor(firstname:string, lastname:string)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullName = firstname + " " + lastname;
    }
}

function sayHello(person: Person)
{
    return "Hello "+person;
}

function sayHelloToSystemUser(systemUser: SystemUser)
{
    return "Hello "+systemUser.fullName;
}

var person:Person =
{
    firstname : "David",
    lastname : "Ontiveros"
};

var systemUser:SystemUser = new SystemUser("David", "Ontiveros");

//document.body.innerHTML = sayHello(person);
//document.body.innerHTML = sayHelloToSystemUser(systemUser);

sayHelloToConsole('daviD');