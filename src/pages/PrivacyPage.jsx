import LegalContents from "../components/features/LegalContents.jsx";
import Layout from "../components/layout/Layout.jsx";
import FeatureStore from "../store/FeatureStore.jsx";
import {useEffect} from "react";

const PrivacyPage = () => {

    const {legalDetailsRequest} = FeatureStore()

    useEffect(()=>{
        (async ()=>{
            await legalDetailsRequest("privacy")
        })()
    },[])

    return (
        <Layout>
            <LegalContents/>
        </Layout>
    );
};

export default PrivacyPage;