import Skeleton from "react-loading-skeleton";

const LegalContentSkeleton = () => {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-12">
                    <div className="card-p4">
                        {
                            Array.from({length:8}).map((item,i)=>{
                                return(
                                    <div key={i} className="card-body">
                                        <Skeleton count={3}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalContentSkeleton;