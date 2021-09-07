import { profilePicUpload, fetchInterestsCategories, updateInterests } from '../constants/apiURLs';
import axios from 'axios';

axios.defaults.headers.post['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE4OCwiZmlyc3ROYW1lIjoiVGVqYXMiLCJsYXN0TmFtZSI6IkRhZGhlIiwiYmlydGhZZWFyIjoiMDktMzAtMTk5NCIsImVtYWlsQ29uZmlybWVkIjpmYWxzZSwiaXNBY3RpdmUiOnRydWUsInByb2ZpbGVDb21wbGV0ZWQiOmZhbHNlLCJwcm9maWxlSW1hZ2UiOiIiLCJsb2dpbiI6dHJ1ZSwiZW1haWwiOiJ0ZWphcy43OXNhYXlhOEBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6IkVuZCBVc2VyIiwiaWF0IjoxNjMwNjg4Mzk4fQ.WZDdhTEfMdVpnv8S4uPni7605v3hzu_rddx9ESWmpmM' 

export const uploadProfilePicture = (file) => {

  const formData = new FormData();
  formData.append('profile-picture', file);

  return new Promise((resolve, reject) => {
    axios
      .post(profilePicUpload, formData, { headers: { "Content-type": "multipart/form-data" }})
      .then((response) => {
        console.log("Profile Picture Response", response.data);
        if(response.data && response.data.error) {
            reject(new Error(response.data.data));
        }
        resolve(response.data.data);
      })
      .catch((err) => reject(err))
  })
}


export const getInterestCategories = () => {

  return new Promise((resolve, reject) => {
    axios
      .get(fetchInterestsCategories)
      .then((response) => {
        console.log("Interests", response.data);
        resolve(response.data.data.filter((item) => item.ParentCategoryId === 0));
      })
      .catch((err) => reject(err))
  })
}

export const updateUserInterestCategories = (interests) => {
  return new Promise((resolve, reject) => {
    axios
      .post(updateInterests ,{interestIds : interests.toString()})
      .then((response) => {
        console.log("Interest submission response", response.data);
        if(response.data && response.data.error) {
            reject(new Error(response.data.data));
        }
        resolve(response.data.data);
      })
      .catch((err) => reject(err))
  })
}
