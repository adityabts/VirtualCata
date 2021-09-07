import axios from 'axios';
import { register, login, verifyEmail, forgotPasswordRequest, resetPasswordRequest } from '../constants/apiURLs';

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

export const signUp = (authData) => {
    return new Promise((resolve, reject) => {
      axios
        .post(register,JSON.stringify(authData))
        .then((response) => {
          console.log("Auth Response",response);
          if(response.data && response.data.error) {
            reject(new Error(response.data.data));
          }
          resolve(response.data.data.responseFromDB.data);
        })
        .catch((err) => reject(err))
    })
}

export const signIn = (authData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(login,JSON.stringify(authData))
      .then((response) => {
        if(response.data && response.data.error) {
          reject(new Error(response.data.data));
        }
        resolve(response.data.data);
      })
      .catch((err) => reject(err))
  })
}

export const verifyEmailwithToken = (token) => {
  return new Promise((resolve, reject) => {
    axios
      .post(verifyEmail,JSON.stringify({ token }))
      .then((response) => {
        if(response.data && response.data.error) {
          reject(new Error(response.data.data));
        }
        resolve(response.data.data);
      })
      .catch((err) => reject(err))
  })
}

export const forgotPassword = (email) => {
  return new Promise((resolve, reject) => {
    axios
      .post(forgotPasswordRequest,JSON.stringify({ email }))
      .then((response) => {
        if(response.data && response.data.error) {
          reject(new Error(response.data.data));
        }
        resolve(response.data.data);
      })
      .catch((err) => reject(err))
  })
}

export const resetPassword = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    axios
      .post(resetPasswordRequest,JSON.stringify(data))
      .then((response) => {
        if(response.data && response.data.error) {
          reject(new Error(response.data.data));
        }
        resolve(response.data.data);
      })
      .catch((err) => reject(err))
  })
}

