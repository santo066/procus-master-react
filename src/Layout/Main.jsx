import { Outlet,} from "react-router-dom";
import Header from '../Component/Include/Header';
import React from 'react';
import Footer from '../Component/Include/Footer';

export default function Main() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}