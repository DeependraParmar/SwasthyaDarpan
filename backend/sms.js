const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "dc32a1c8",
  apiSecret: "xXGM7eZLqFDNqB07"
})

async function sendSMS(to, text) {
  const from = "Vonage APIs"
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}


sendSMS("919993234069", 'Hello from SwasthyaDarpan AjPIs!');
module.exports = sendSMS;