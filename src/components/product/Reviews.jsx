import ProductStore from "../../store/ProductStore.jsx";
import StarRatings from "react-star-ratings/build/star-ratings.js";

const Reviews = () => {

    const {ReviewList} = ProductStore();

    return (
        <div>
            <ul className="list-group mt-3 list-group-flush">
                {
                    ReviewList!==null?(ReviewList.map((item,i)=>{
                        return <li key={i} className="list-group-item bg-transparent">
                            <h6><i className="bi bi-person-circle"></i> {item['profile']['cus_name']}</h6>
                            <p>{item['des']}</p>
                            <StarRatings rating={parseFloat(item['rating'])} starRatedColor="red" starDimension="15px" starSpacing="2px"/>
                            </li>
                    })):(<span></span>)
                }
            </ul>
        </div>
    );
};

export default Reviews;