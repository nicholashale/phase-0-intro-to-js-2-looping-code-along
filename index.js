let eventName = "surprise";
const recipients = ["Guadalupe","Ollie", "Aki"];
let message = [];

function writeCards(recipients, eventName) {
    for (let i = 0; i < recipients.length; i++) {
       message.push(`Thank you, ${recipients[i]}, for the wonderful ${eventName} gift!`);
    }
    
    return message;
}

function countDown(startNumber) {
    let i = startNumber
    while (i >= 0) {
        console.log(i--);
    }

}