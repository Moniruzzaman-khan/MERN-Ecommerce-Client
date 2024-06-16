import Layout from "../components/layout/Layout.jsx";
import Details from "../components/product/Details.jsx";
import {useParams} from "react-router-dom";
import Brands from "../components/product/Brands.jsx";
import ProductStore from "../store/ProductStore.jsx";
import {useEffect} from "react";

const ProductDetails = () => {

    const {BrandList,DetailsRequest,ReviewListRequest,BrandListRequest} = ProductStore();

    const {id} = useParams();

    useEffect(()=>{
        (async ()=>{
            await DetailsRequest(id);
            await ReviewListRequest(id);
            BrandList===null?await BrandListRequest():null
        })()
    },[])

    return (
        <Layout>
            <Details/>
            <Brands/>
        </Layout>
    );
};

export default ProductDetails;