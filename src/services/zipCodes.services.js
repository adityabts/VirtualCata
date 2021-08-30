import React from 'react';
import axios from 'axios';

const usps = "https://dev-vcata-webapi-eus.azurewebsites.net/api/USPSCityStateLookup?code=Dy826hfG/HgkvUhSlLUHUEbjjndloLTvXMpgvAGxwzkyYs5cUSa4PQ=="; 

const  verifyZipCode = async (zipCode) => {
  return new Promise((resolve, reject) => {
      axios
          .post(usps, JSON.stringify({zipCode}))
          .then((response) => {
          console.log("Response", response.data);  
          if(response.data.error) {
              console.log("Error!");
              reject(new Error(response.data.data));
          }
          else {
            console.log("Success!");
            resolve(response.data.data);
          }
          })
          .catch((err) => reject(err))
      })
}

export default verifyZipCode;