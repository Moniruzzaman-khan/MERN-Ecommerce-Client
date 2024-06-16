import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductByBrand from "./pages/ProductByBrand.jsx";
import ProductByCategory from "./pages/ProductByCategory.jsx";
import ProductByKeyword from "./pages/ProductByKeyword.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ComplainPage from "./pages/ComplainPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HowToBuyPage from "./pages/HowToBuyPage.jsx";
import RefundPage from "./pages/RefundPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import TermsPage from "./pages/TermsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import OtpPage from "./pages/OTPpage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import WishPage from "./pages/WishPage.jsx";
import CartListPage from "./pages/CartListPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import InvoicePage from "./pages/InvoicePage.jsx";

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/by-brand/:id" element={<ProductByBrand/>}/>
                    <Route path="/by-category/:id" element={<ProductByCategory/>}/>
                    <Route path="/by-keyword/:keyword" element={<ProductByKeyword/>}/>
                    <Route path="/details/:id" element={<ProductDetails/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/complain" element={<ComplainPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/howtobuy" element={<HowToBuyPage/>}/>
                    <Route path="/refund" element={<RefundPage/>}/>
                    <Route path="/privacy" element={<PrivacyPage/>}/>
                    <Route path="/terms" element={<TermsPage/>}/>

                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/otp" element={<OtpPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>

                    <Route path="/wish" element={<WishPage/>}/>
                    <Route path="/cart" element={<CartListPage/>}/>
                    <Route path="/orders" element={<OrderPage/>}/>
                    <Route path="/invoice/:id" element={<InvoicePage/>}/>
                </Routes>
        </BrowserRouter>
    );
};

export default App;