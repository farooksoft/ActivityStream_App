export class Message {
    messageId: number;
    senderName: string;
    receiverId: string;
    circleName: string;
    postedDate: string;
    message: string;
    messagearray: object[];


    constructor() {

        this.messagearray = [ ]
    }

    getMessagearray() {
        return this.messagearray;
    }

}





