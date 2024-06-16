import ProductStore from "../store/ProductStore.jsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import Layout from "../components/layout/Layout.jsx";
import ProductList from "../components/product/ProductList.jsx";

const ProductByCategory = () => {
    const {ListByCategoryRequest} = ProductStore();

    const {id} = useParams();

    useEffect(()=>{
        (async ()=>{
            await ListByCategoryRequest(id)
        })()
    },[id])

    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
};

export default ProductByCategory;