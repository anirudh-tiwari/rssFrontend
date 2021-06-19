import fetchRequests from "./Fetch";
const Api = {
  // getFeed: () => {
  //     return fetchRequests.secured("product/get", 'GET');
  // },
  getFeedTitle: () => {
    return fetchRequests.get("getTitle/get");
  },
  getFeedData: (id) => {
    return fetchRequests.get(`webScrapper/get?id=${id}`);
  },
  getProductRedux: (id) => {
    return fetchRequests.secured(`product/redux?ID=${id}`, "GET");
  },
  getViewProducts: (id) => {
    return fetchRequests.get(`product/view?ID=${id}`);
  },
  getSearchProducts: (search) => {
    return fetchRequests.get(`product/search?type=${search}`);
  },
  postFeed: (data) => {
    return fetchRequests.secured(`addLink/cre`, "POST", data);
  },
  addBookmarkData: (data) => {
    return fetchRequests.secured(`bookmark/add`, "POST", data);
  },
  getBookmarkData: () => {
    return fetchRequests.secured(`bookmark/get`, "GET");
  },
  postOtp: (data) => {
    return fetchRequests.post(`otp/send`, data);
  },
  verifyOtp: (data) => {
    return fetchRequests.post(`otp/verify`, data);
  },
  getCartProduct: () => {
    return fetchRequests.secured(`cart/get`, "GET");
  },
  postCart: (data) => {
    return fetchRequests.secured("cart/create", "POST", data);
  },
  postQuantity: (data) => {
    return fetchRequests.secured("cart/Quantity", "POST", data);
  },
  deleteProduct: (data) => {
    return fetchRequests.secured("cart/delete", "DELETE", data);
  },
  deleteAll: () => {
    return fetchRequests.secured("cart/empty", "DELETE");
  },
};
export default Api;
