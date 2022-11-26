import { globalGetService } from "../utils.js/globalApiServices";
const baseUrl = "http://46.101.65.156:8069/api/";

export const getSpotlightApi = (setSpotlight) => {
  globalGetService(`api/blog/spotlight`).then((response) => {
    setSpotlight(response.data[0]);
  });
};
