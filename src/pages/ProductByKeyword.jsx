import ProductStore from "../store/ProductStore.jsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import Layout from "../components/layout/Layout.jsx";
import ProductList from "../components/product/ProductList.jsx";

const ProductByKeyword = () => {
    const {ListByKeywordRequest} = ProductStore();

    const {keyword} = useParams();

    useEffect(()=>{
        (async ()=>{
            await ListByKeywordRequest(keyword)
        })()
    },[keyword])

    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
};

export default ProductByKeyword;