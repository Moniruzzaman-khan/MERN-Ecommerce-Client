import LegalContents from "../components/features/LegalContents.jsx";
import Layout from "../components/layout/Layout.jsx";
import FeatureStore from "../store/FeatureStore.jsx";
import {useEffect} from "react";

const HowToBuyPage = () => {

    const {legalDetailsRequest} = FeatureStore()

    useEffect(()=>{
        (async ()=>{
            await legalDetailsRequest("howtobuy")
        })()
    },[])

    return (
        <Layout>
            <LegalContents/>
        </Layout>
    );
};

export default HowToBuyPage;