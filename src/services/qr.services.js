import { eventVisit } from "../constants/apiURLs";
import axios from 'axios';


export const registerEventVisit = (qrId) => {
    return new Promise((resolve, reject) => {
      axios
        .post(eventVisit, JSON.stringify({qrId}))
        .then((response) => {
          console.log("Response", response.data);  
          if(response.data && response.data.error) {
            reject(new Error(response.data.data));
          }
          resolve(response.data.data);
        })
        .catch((err) => reject(err))
    })
}