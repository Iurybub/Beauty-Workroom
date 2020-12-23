import React from 'react';
import Service from './Service';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadList} from '../actions/listAction';
import {useLocation} from 'react-router-dom';

const ItemList = () => {


    const serviceList = useSelector((state) => state.lists)
    return(
       <section>
           {serviceList.lists[0] && 
             <div className="container mt-6 mb-6	p-5">
               <h1>{serviceList.lists[0].type_of_service}</h1>
             <div className="row mb-5 mb-0 mt-5">
               {serviceList.lists.map((services) => (
                <Service 
                    key={services.id}
                    id={services.id} 
                    title={services.title}
                    short_des={services.short_description}
                    specialist_title={services.type_of_service}/>
                ))}
             </div>
             </div>
             }
          
       </section>
    

    );
}

export default ItemList;


    