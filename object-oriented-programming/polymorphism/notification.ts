abstract class Notifications {
    abstract send(): void

}

class EmailNotification extends Notifications {
    send() {
        console.log("Sending an email notification")
        }}

class SMSNotification extends Notifications {
    send() {
        console.log("Sending an SMS notification")
        }}

class PushNotification extends Notifications {
    send() {
        console.log("Sending a push notification")
        }}
        
const emailNotification = new EmailNotification()
emailNotification.send()

const smsNotification = new SMSNotification()
smsNotification.send()

const pushNotification = new PushNotification()
pushNotification.send()

        

