import React from "react";
import ServiceList from '../components/ServiceList';
import Header from '../components/Header';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Form from '../components/Form';
const Home = () =>{

    return(
        <div>
            <Nav />
            <Header />
            <CTA /> 
            <ServiceList/>
            <Form />
            <Footer />
        </div>
    )
}

export default Home;
