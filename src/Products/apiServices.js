import { globalGetService } from "../utils/globalApiServices";

export const getProductsApi = (setProducts) => {
  globalGetService(`product/list`).then((response) => {
    setProducts(response.data);
  });
};

export const getProductApi = (slug, setProduct) => {
  globalGetService(`product/details/${slug}`).then((response) => {
    setProduct(response.data.data);
  });
};
