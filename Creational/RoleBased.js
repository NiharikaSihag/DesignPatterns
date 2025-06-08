class User{
    constructor( type){
        this.type = type;
    }
    send(by){
        console.log(`send ${this.type} to ${by}`)
    }
}

class sendSms extends Notifier{
    constructor(){
        super('sms')
    }
}
class sendMail extends Notifier{
    constructor(){
        super('sms')
    }
}
class sendText extends Notifier{
   constructor(){
        super('sms')
    }
}


// create factory using static method
class sendNotification{
    static sendMessage(type){
        switch(type){
       case 'email':
        return new sendMail();
       case 'sms':
        return new sendSms();
       case 'text':
        return new sendText();
    }
    }
}
const notification = sendNotification.sendMessage('sms');
notification.send('Nihaa')

