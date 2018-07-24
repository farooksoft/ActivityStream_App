export class User{
    username : string;
    name : string;
    password : string;
    
    users : object[];
    
    constructor()
    {
        this.users = [
    {username: 'tom', name: 'TOM', password: 'tom123'},
    {username: 'jerry', name: 'Jerry', password: 'jerry123'}    
]
        }
    getUser(){
        return this.users;
        }
    }

