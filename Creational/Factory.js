class Notifier{
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



// // create factory using simple function
// function notify(type){
//     if(type === 'email'){
//         return new sendMail();
//     }
// }
// notify('email').send('Niha')



// // create factory using dynamic mapping
// const types ={
//     email: () => new sendMail(),
//     sms: () => new sendSms(),
//     text: () => new sendText()
// }
// function notifyUser(way){
//     return types[way]();
// }
// const myNot = notifyUser('email');
// myNot.send('Niharika');





// single configurable class
// class Notifier{
//     constructor(type){
//         this.type = type;
//     }
//     send(by){
//         console.log(`send ${this.type} to ${by}`)
//     }
// }
// const types ={
//     email: () => new Notifier('mail'),
//     sms: () => new Notifier('sms'),
//     text: () => new Notifier('text')
// }
// function notifyUser(way){
//     return types[way]();
// }
// const myNot = notifyUser('email');
// myNot.send('Niharika');