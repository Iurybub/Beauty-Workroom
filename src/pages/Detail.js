import React from 'react'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadDetails} from '../actions/detailAction';
import {useLocation} from 'react-router-dom';
import Nav from '../components/Nav';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer'

const Details = () => {
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];   
    const dispatch = useDispatch();

    useEffect(() =>{
      dispatch(loadDetails(pathId));
    }, [dispatch]);

    const details = useSelector((state) => state.detail)

    const Container = styled.div`
      display: flex;
      min-height: 80vh;
      justify-content: center;
      align-items: center;
      @media(max-width: 1185px){
       
      }
     img{
       height: 700px;
     }
      
    `
    const Row = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      max-width: 70%;
  
      overflow:hidden;
      @media(max-width: 991px){  
        width: 100%;
      }
`

    return(
      <section>
        <Nav />
        <Container>
          <Row>
          <div className="col-lg-8 p-3">
            <h2>{details.service.title}</h2>
            <p>{details.service.description}</p>
            <div className="container">
            <div className="row">
            <Link to={`/${details.service.type_of_service}`}><div className="col-lg-5"><a href="#">Author</a></div></Link>
            <Link to={`/${details.service.type_of_service}`}><div className="col-lg-5"><a href="#">{details.service.type_of_service}</a></div></Link>
            </div>
            </div>
          </div>
          </Row>
        </Container>
        <Footer />
      </section>
    );
}

export default Details;

// ${details.service.type_of_service}