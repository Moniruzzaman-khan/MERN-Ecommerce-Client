import {Link, useNavigate} from "react-router-dom";
import i1 from '../../assets/images/i1.png'
import ProductStore from "../../store/ProductStore.jsx";
import UserStore from "../../store/UserStore.jsx";
import SubmitButton from "./SubmitButton.jsx";
import CartStore from "../../store/CartStore.jsx";
import {useEffect} from "react";
import WishStore from "../../store/WishStore.jsx";

const AppNavBar = () => {

    const navigate = useNavigate();

    const  {SearchKeyword,SetSearchKeyword} = ProductStore();
    const {isLogin,UserLogoutRequest} = UserStore();
    const {CartCount,CartListRequest} = CartStore();
    const {WishListRequest,WishCount} = WishStore();
    const onLogout=async ()=>{
        await UserLogoutRequest();
        sessionStorage.clear();
        localStorage.clear();
        navigate("/")
    }

    useEffect(() => {
        (async  ()=>{
            if(isLogin()){
                await CartListRequest();
                await WishListRequest();
            }
        })()
    },[])

    return (
        <>
            <div className="container-fluid text-white p-2 bg-success">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-md-6">
                       <span>
                           <span className="f-12">
                               <i className="bi bi-envelope"></i> Support@monirMart.com
                           </span>
                           <span className="f-12 mx-2">
                               <i className="bi bi-telephone"></i> 01949968118
                           </span>
                       </span>
                        </div>
                        <div className="col-md-6">
                        <span className="float-end">
                            <span className="bodySmall mx-2">
                                <i className="bi bi-whatsapp"></i>
                            </span>
                            <span className="bodySmall mx-2">
                                <i className="bi bi-youtube"></i>
                            </span>
                            <span className="bodySmall mx-2">
                                <i className="bi bi-facebook"></i>
                            </span>
                        </span>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar sticky-top bg-white navbar-expand-lg navbar-light py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="img-fluid" src={i1} alt=""  width="150px"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav06" aria-controls="nav06" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="nav06">
                        <ul className="navbar-nav mt-3 mt-lg-0 md-3 mb-lg-0 ms-lg-3">
                            <span className="nav-item me-4">
                                <Link className="nav-link bodyXLarge" to="/">Home</Link>
                            </span>
                        </ul>
                    </div>
                    <div className="d-lg-flex">
                        <div className="input-group">
                            <input onChange={(e)=>SetSearchKeyword(e.target.value)} className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                            <Link to={SearchKeyword.length>0?`/by-keyword/${SearchKeyword}`:`/`} className="btn btn-outline-dark" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{width:24,height:24}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </Link>
                        </div>


                        {
                            isLogin()?(
                                <>
                                    <Link to="/wish" type="button" className="btn btn-light ms-2 position-relative">
                                        <i className="bi text-dark bi-heart"></i>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                            {WishCount}
                                            <span className="visually-hidden">unread message</span>
                                        </span>
                                    </Link>
                                    <Link to="/cart" type="button" className="btn btn-light ms-2 position-relative">
                                        <i className="bi bi-cart"></i>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                            {CartCount}
                                            <span className="visually-hidden">unread message</span>
                                        </span>
                                    </Link>
                                    <Link to="/orders" type="button" className="btn btn-light ms-2">
                                        <i className="bi bi-truck"></i>
                                    </Link>
                                    <Link className="btn ms-3 btn-success d-flex" to="/profile" type="button">Profile</Link>
                                    <SubmitButton onClick={onLogout} text="Logout" className="btn ms-3 btn-success d-flex"/>
                                </>
                            ):(
                                <>
                                    <Link className="btn ms-2 btn-light position-relative" to="/login" type="button">
                                        <i className="bi bi-cart"></i>
                                    </Link>
                                    <Link className="btn ms-2 btn-light d-flex" to="/login" type="button">
                                        <i className="bi text-dark bi-heart"></i>
                                    </Link>
                                    <Link className="btn ms-3 btn-success d-flex" to="/login" type="button">Login</Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AppNavBar;