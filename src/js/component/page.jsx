import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import {Card} from "./card.jsx";
import Footer from "./footer.jsx";

const Page = () => {
    return(
        <>
            <Navbar />
            <Jumbotron />
            <div className="container mx-auto my-5">
                <div className="row text-center">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            
            <Footer />
        </>
    );
};


export default Page;