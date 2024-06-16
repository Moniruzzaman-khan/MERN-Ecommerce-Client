import Lottie from "lottie-react";
import Skeleton from "react-loading-skeleton";
import Animation from "../assets/images/Animation.json";

const CartSkeleton = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="card p-4">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex align-items-start">
                                <Lottie style={{width:"100px"}} animationData={Animation} loop={true}/>
                                <div className="p-3">
                                    <Skeleton count={3} style={{width:"200px"}}/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSkeleton;