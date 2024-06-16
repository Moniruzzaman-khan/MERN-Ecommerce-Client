import FeatureStore from "../../store/FeatureStore.jsx";
import LegalContentSkeleton from "../../skeleton/Legal-content-skeleton.jsx";
import parse from 'html-react-parser'

const LegalContents = () => {

    const {legalDetails} = FeatureStore()

    if(legalDetails===null){
        return <LegalContentSkeleton/>
    }else{
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card-p4">
                            {parse(legalDetails[0]['description'])}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default LegalContents;