import FeatureStore from "../store/FeatureStore.jsx";
import {useEffect} from "react";
import LegalContents from "../components/features/LegalContents.jsx";
import Layout from "../components/layout/Layout.jsx";

const TermsPage = () => {

    const {legalDetailsRequest} = FeatureStore()

    useEffect(()=>{
        (async ()=>{
            await legalDetailsRequest("terms")
        })()
    },[])

    return (
        <Layout>
            <LegalContents/>
        </Layout>
    );
};

export default TermsPage;