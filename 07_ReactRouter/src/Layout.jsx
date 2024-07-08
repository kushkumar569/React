import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

/* here we provide our Layout first Header then Outlet means changeable and then Footer. 
    Header and Footer always in Layout. only Outlet is change.*/
function Layout(){
    return(
        <>
        <Header/> 
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout