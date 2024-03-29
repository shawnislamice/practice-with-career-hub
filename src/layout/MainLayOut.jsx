import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import Spinner from "../components/Spinner";

const MainLayOut = () => {
    const navigation=useNavigation()
    if(navigation.state=='loading'){
        return <Spinner></Spinner>
    }
    return (
        <div className="container mx-auto max-w-screen-xl">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        <Toaster></Toaster>
        </div>
        
    );
};

export default MainLayOut;