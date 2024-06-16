import { create } from "zustand";
import axios from "axios";

const ProductStore = create((set) => ({
    BrandList: null,
    BrandListRequest: async () => {
        try {
            let res = await axios.get(`/api/v1/ProductBrandList`);
            if (res.data['status'] === "success") {
                set({ BrandList: res.data['data'] });
            }
        } catch (error) {
            console.error("Error fetching BrandList:", error);
        }
    },

    CategoryList: null,
    CategoryListRequest: async () => {
        try {
            let res = await axios.get(`/api/v1/ProductCategoryList`);
            if (res.data['status'] === "success") {
                set({ CategoryList: res.data['data'] });
            }
        } catch (error) {
            console.error("Error fetching CategoryList:", error);
        }
    },

    SliderList: null,
    SliderListRequest: async () => {
        try {
            let res = await axios.get(`/api/v1/ProductSliderList`);
            if (res.data['status'] === "success") {
                set({ SliderList: res.data['data'] });
            }
        } catch (error) {
            console.error("Error fetching SliderList:", error);
        }
    },

    ListByRemark: null,
    ListByRemarkRequest: async (Remark) => {
        try {
            let res = await axios.get(`/api/v1/ProductListByRemark/${Remark}`);
            if (res.data['status'] === "success") {
                set({ ListByRemark: res.data['data'] });
            }
        } catch (error) {
            console.error(`Error fetching products by remark (${Remark}):`, error);
        }
    },
    Details:null,
    DetailsRequest: async (id) => {
        try {
            set({ Details: null });
            let res = await axios.get(`/api/v1/ProductDetails/${id}`);
            if (res.data['status'] === "success") {
                set({ Details: res.data['data'] });
            }
        } catch (error) {
            console.error("Error fetching products by details:", error);
        }
    },
    ReviewList:null,
    ReviewListRequest: async (id) => {
        try {
            let res = await axios.get(`/api/v1/ProductReviewList/${id}`);
            if (res.data['status'] === "success") {
                set({ ReviewList: res.data['data'] });
            }
        } catch (error) {
            console.error("Error fetching products by review list:", error);
        }
    },

    ListProduct: null,
    ListByBrandRequest: async (BrandID) => {
        try {
            set({ ListProduct: null });
            let res = await axios.get(`/api/v1/ProductListByBrand/${BrandID}`);
            if (res.data['status'] === "success") {
                set({ ListProduct: res.data['data'] });
            }
        } catch (error) {
            console.error(`Error fetching products by brand (${BrandID}):`, error);
        }
    },
    ListByCategoryRequest: async (CategoryID) => {
        try {
            set({ ListProduct: null });
            let res = await axios.get(`/api/v1/ProductListByCategory/${CategoryID}`);
            if (res.data['status'] === "success") {
                set({ ListProduct: res.data['data'] });
            }
        } catch (error) {
            console.error(`Error fetching products by category (${CategoryID}):`, error);
        }
    },
    ListByKeywordRequest: async (Keyword) => {
        try {
            set({ ListProduct: null });
            let res = await axios.get(`/api/v1/ProductListByKeyword/${Keyword}`);
            if (res.data['status'] === "success") {
                set({ ListProduct: res.data['data'] });
            }
        } catch (error) {
            console.error(`Error fetching products by keyword (${Keyword}):`, error);
        }
    },
    ListByFilterRequest: async (postBody) => {
        try {
            set({ ListProduct: null });
            let res = await axios.post(`/api/v1/ProductListByFilter`, postBody);
            if (res.data['status'] === "success") {
                set({ ListProduct: res.data['data'] });
            }
        } catch (error) {
            console.error("Error fetching products by filter:", error);
        }
    },
    SearchKeyword: "",
    SetSearchKeyword: async (keyword) => {
        set({ SearchKeyword: keyword });
    }
}));

export default ProductStore;
