import fetchRequests from "./Fetch";
const Api = {
    getProduct: () => {
        return fetchRequests.secured("product/get", 'GET');
    },
    getProductRedux: (id) => {
        return fetchRequests.secured(`product/redux?ID=${id}`, 'GET');
    },
    getViewProducts: (id) => {
        return fetchRequests.get(`product/view?ID=${id}`);
    },
    getSearchProducts: (search) => {
        return fetchRequests.get(`product/search?type=${search}`);
    },
    postFeed: (data) => {
        return fetchRequests.secured(`otp/send`, data);
    },
    verifyOtp: (data) => {
        return fetchRequests.post(`otp/verify`, data);
    },
    getCartProduct: () => {
        return fetchRequests.secured(`cart/get`, 'GET');
    },
    postCart: (data) => {
        return fetchRequests.secured("cart/create", 'POST', data);
    },
    postQuantity: (data) => {
        return fetchRequests.secured("cart/Quantity", 'POST', data);
    },
    deleteProduct: (data) => {
        return fetchRequests.secured("cart/delete", 'DELETE', data);
    },
    deleteAll: () => {
        return fetchRequests.secured("cart/empty", 'DELETE');
    },
};
export default Api;