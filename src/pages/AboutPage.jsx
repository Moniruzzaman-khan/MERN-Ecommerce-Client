import Layout from "../components/layout/Layout.jsx";
import LegalContents from "../components/features/LegalContents.jsx";
import FeatureStore from "../store/FeatureStore.jsx";
import {useEffect} from "react";

const AboutPage = () => {

    const {legalDetailsRequest} = FeatureStore()

    useEffect(()=>{
        (async ()=>{
            await legalDetailsRequest("about")
        })()
    },[])

    return (
        <Layout>
            <LegalContents/>
        </Layout>
    );
};

export default AboutPage;