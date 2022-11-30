import axiosInstance from "./apiInterceptor";
export const globalGetService = (url, params) => {
  return new Promise(function (resolve, reject) {
    axiosInstance({
      method: "get",
      url: url,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  });
};
export const globalPostService = (url, data) => {
  return new Promise(function (resolve, reject) {
    axiosInstance({
      method: "POST",
      url: url,
      data: data,
    }).then((response) => {
      resolve(response);
    });
  });
};
