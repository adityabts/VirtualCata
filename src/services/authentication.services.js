import axios from 'axios';

export const sendEmail = (emailAddress, name) => {
    let data = JSON.stringify({
    "sendTo": emailAddress,
    "userName": name
    });
    
    let config = {
    method: 'post',
    url: 'https://dev-vcata-notificationapi-eus.azurewebsites.net/api/sendEmailNotificationWelcome?code=5KbCxpXAZRLOmzoi2ZZqQCvMsItCvdb2zWE1ARkbn9etwNaa3DLWbA==',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };
    
    axios(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
    console.log(error);
    });
}