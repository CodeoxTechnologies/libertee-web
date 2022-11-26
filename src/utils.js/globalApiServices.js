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
