import { globalGetService } from "../utils.js/globalApiServices";

export const getProductsApi = (setProducts) => {
  globalGetService(`product/list`).then((response) => {
    setProducts(response.data);
  });
};
