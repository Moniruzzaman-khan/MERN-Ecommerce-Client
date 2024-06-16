import ProductStore from "../store/ProductStore.jsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import Layout from "../components/layout/Layout.jsx";
import ProductList from "../components/product/ProductList.jsx";

const ProductByBrand = () => {

    const {ListByBrandRequest} = ProductStore();

    const {id} = useParams();

    useEffect(()=>{
        (async ()=>{
            await ListByBrandRequest(id)
        })()
    },[id])

    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
};

export default ProductByBrand;