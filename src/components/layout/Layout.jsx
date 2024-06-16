import AppNavBar from './AppNavBar.jsx'
import Footer from './Footer.jsx'
import {Toaster} from "react-hot-toast";
const Layout = (props) => {
    return (
        <div>
            <AppNavBar></AppNavBar>
            {props.children}
            <Toaster
                position="top-center"
            />
            <Footer></Footer>
        </div>
    );
};

export default Layout;