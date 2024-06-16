import Lottie from "lottie-react";
import Animation from "../assets/images/Animation.json";
import Skeleton from "react-loading-skeleton";

const BrandsSkeleton = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <h1 className="headline-4 text-center my-2 p-0">Top Brands</h1>
                    <span className="bodySmall mb-5 text-center">Explore a World of Choices Across Our Most Popular <br/> Shopping Categories</span>
                    {
                        Array.from({length:16}).map((item,i)=>{
                            return(
                                <div key={i} className="col-6 col-lg-8r text-center col-md-8r p-2">
                                    <div className="card h-100 rounded-3 bg-white">
                                        <div className="card-body">
                                            <Lottie className="w-100" animationData={Animation} loop={true}/>
                                            <Skeleton count={1}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandsSkeleton;