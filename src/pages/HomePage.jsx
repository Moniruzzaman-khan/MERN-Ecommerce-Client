import Layout from "../components/layout/Layout.jsx";
import Brands from "../components/product/Brands.jsx";
import ProductStore from "../store/ProductStore.jsx";
import FeatureStore from "../store/FeatureStore.jsx";
import {useEffect} from "react";
import Slider from "../components/product/Slider.jsx";
import Features from "../components/product/Features.jsx";
import Categories from "../components/product/Categories.jsx";
import Products from "../components/product/Products.jsx";


const HomePage = () => {

    const {BrandListRequest,CategoryListRequest,SliderListRequest,ListByRemarkRequest} = ProductStore();
    const {FeatureListRequest} = FeatureStore();

    useEffect(() => {
        (async ()=>{
            await BrandListRequest();
            await SliderListRequest();
            await FeatureListRequest();
            await CategoryListRequest();
            await ListByRemarkRequest("new");
        })()
    },[]);

    return (
        <Layout>
            <Slider/>
            <Features/>
            <Categories/>
            <Products/>
            <Brands/>
        </Layout>
    );
};

export default HomePage;