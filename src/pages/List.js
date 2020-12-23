import React from 'react'
import Nav from '../components/Nav';
import ItemList from '../components/ItemList';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadList} from '../actions/listAction';
import {useLocation} from 'react-router-dom';

const List = () => {
    

    return(
       <section>
        <Nav />
        <ItemList/>    
       </section>
    

    );
}

export default List;


    