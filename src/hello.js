var SystemUser = (function () {
    function SystemUser(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullName = firstname + " " + lastname;
    }
    return SystemUser;
}());
function sayHello(person) {
    return "Hello " + person;
}
function sayHelloToSystemUser(systemUser) {
    return "Hello " + systemUser.fullName;
}
var person = {
    firstname: "David",
    lastname: "Ontiveros"
};
var systemUser = new SystemUser("David", "Ontiveros");
//document.body.innerHTML = sayHello(person);
document.body.innerHTML = sayHelloToSystemUser(systemUser);
