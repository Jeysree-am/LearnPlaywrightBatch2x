//private fields are shown with # and its hidden
//Public fields

class Credentials{
    #apikey;//Private variable not allowed to use outside the class
    user;

    constructor(user,key){
        this.user=user;
        this.#apikey=key;

    }
authheader(){
    return "Bearer"+this.#apikey;
}
}
let cred= new Credentials("admin","secretkey");
console.log(cred.user);
console.log(cred.apikey);//output undefined as its called outside the class
//console.log(cred.#apikey);//output SyntaxError: Private field '#apikey' must be declared in an enclosing class
const token =cred.authheader()
console.log(token);