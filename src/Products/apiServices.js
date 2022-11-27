import { globalGetService } from "../utils.js/globalApiServices";

export const getProductsApi = (setProducts) => {
  globalGetService(`get/products`).then((response) => {
    setProducts(response.data);
  });
};
