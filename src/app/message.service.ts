import { Injectable } from '@angular/core';
import { Message } from './message/message';
import { Http } from "@angular/http";

@Injectable()
export class MessageService {

  constructor(private http:Http) { }

  username:string;
  circle : string;

  private BASE_URL = 'http://localhost:8084/api/message/';


 getMessagesFromUser(userName:any)
 {
   this.username = userName;
  console.log('In service', userName);
   return this.http.get(this.BASE_URL + 'getMessagesByUser/Kenny/' + userName + '/' + 2);
 }

 sendMessageToUser(message: any) {
  return this.http.post(this.BASE_URL+'sendMessageToUser/'+ this.username, message);    
}


 getMessagesByCircle(circle)
{
  this.circle = circle;
    return this.http.get(this.BASE_URL+'getMessagesByCircle/' + circle +'/2');
 }

 sendMessageToCircle(message:any)
 {
   return this.http.post(this.BASE_URL+'sendMessageToCircle/' +this.circle,message);
 }


}
