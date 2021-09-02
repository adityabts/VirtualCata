import { feedbackUrl } from "../constants/apiURLs";
import axios from 'axios';


export const saveFeedback = (feedback) => {
    return new Promise((resolve, reject) => {
      axios
        .post(feedbackUrl, JSON.stringify(feedback))
        .then((response) => {
          if(response.data && response.data.error) {
            reject(new Error(response.data.data));
          }
          resolve(response.data.data);
        })
        .catch((err) => reject(err))
    })
}