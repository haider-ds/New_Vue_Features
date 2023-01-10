/**
 * Description: This file consists of axios request plugin that can be used to make requests and errors can be handled at once rather than repeating code
 * @param {String} url
 * @param {String} methods
 * @param {Object} data object containing data to be sent with post
 * !Note: Please send empty object {} in case of GET request as parameter
 */
import axios from "axios";
export default {
  install(app) {
    const baseUrls = process.env.BACKEND_URL;
    app.config.globalProperties.apiService = (url, method, data) => {

      const options = {
        url: `${baseUrls}/${url}`,
        method: method,
        data: data,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      };
      return new Promise((resolve, reject) => {
        axios(options)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {

          });
      });
    };
  },
};
