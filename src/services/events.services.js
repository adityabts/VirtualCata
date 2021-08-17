import { fetchEvents } from "../constants/apiURLs";
import axios from "axios";

export const getEvents = (filterData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(fetchEvents, JSON.stringify(filterData))
      .then((response) => {
        if (response.data && response.data.error) {
          reject(new Error(response.data.data));
        }
        resolve(response.data.data);
      })
      .catch((err) => reject(err));
  });
};

export const getEventDetails = async (searchParams) => {
  const url =
    "https://dev-vcata-webapi-eus.azurewebsites.net/api/FetchEventDetails?code=GwsgVTnkgaDuzSJ4nFHRYPSyhmkhIfPFh0ajFTASGky0Yqb1zqFWew==";
  return new Promise((resolve, reject) => {
    axios
      .post(url, JSON.stringify(searchParams))
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
