import { globalGetService } from "../utils.js/globalApiServices";

export const getSpotlightApi = (setSpotlight) => {
  globalGetService(`api/blog/spotlight`).then((response) => {
    setSpotlight(response.data[0]);
  });
};
