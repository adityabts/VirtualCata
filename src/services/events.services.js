import { fetchEvents } from "../constants/apiURLs";
import axios from 'axios';


export const getEvents = (filterData) => {
    return new Promise((resolve, reject) => {
      axios
        .post(fetchEvents, JSON.stringify(filterData))
        .then((response) => {
          if(response.data && response.data.error) {
            reject(new Error(response.data.data));
          }
          resolve(response.data.data);
        })
        .catch((err) => reject(err))
    })
}