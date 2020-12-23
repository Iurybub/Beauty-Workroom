import React from 'react'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadCosmetology, loadCosmetics, loadMeditation} from '../actions/serviceAction';
import Service from './Service';
import {Link} from 'react-router-dom'
import profile1 from '../static/images/profiles/profile1.jpg';
import profile2 from '../static/images/profiles/profile2.jpg';
import profile3 from '../static/images/profiles/profile3.jpg';


const ServiceList = () => {

    const dispatch = useDispatch();
    useEffect(() =>{
      dispatch(loadCosmetology());
      dispatch(loadMeditation());
      dispatch(loadCosmetics());
    }, [dispatch]);
    const {cosmetology, cosmetics, meditation} = useSelector((state) => state.services)
	const color1 = '#8884ed'
	const color2 = '#59c9a5'
	const color3 = '#379af5'
    return(

        <div className="container clearfix">
						<div id="section-nextgen top-service" className="page-section bottommargin-lg">
							
							<div className="row clearfix d-flex justify-content-between">
								<div className="col-lg-4 center" >
									<img src={profile1} alt="NextGen Framework"  className="profile-img"></img>
								</div>

								<div className="col-lg-5">
									<div className="topmargin-lg d-none d-lg-block"></div>
									<div className="emphasis-title bottommargin-sm">
										<span className="before-heading">Olga Potapova</span>
										<h2 style={{fontSize: '42px'}} className="font-body ls1 font-weight-normal">Cosmetology</h2>
									</div>
									<p style={{color: 777}} className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, vel! Eius pariatur nemo expedita.</p>
									<Link to={`/cosmetology`}>
									<a href="#" className="section-more-link">See More <i className="icon-angle-right"></i></a>
									</Link>
								</div>
							</div>
							<div className="container mt-6 mb-6	">
								<div className="row col-mb-50 mb-0 mt-5">
                                 {cosmetology.slice(0, 6).map(services => (
										<Service
										color={color1} 
                                        key={services.id}
                                        id={services.id} 
                                        title={services.title}
                                        short_des={services.short_description}
										specialist_title={services.type_of_service}/>
                                    ))}
								</div>
							</div>
			
						</div>

						<div className="line"></div><div className="clear"></div>
	
						<div id="section-stunning-graphics" className="page-section topmargin bottommargin-lg">
							<div className="row clearfix d-flex justify-content-between flex-md-row   flex-sm-column-reverse">
								<div className="col-lg-5">
									<div className="topmargin-lg d-none d-lg-block"></div>
									<div className="emphasis-title bottommargin-sm">
										<span className="before-heading">Valeryia Sochekena</span>
										<h2 style={{fontSize: '42px'}} className="font-body ls1 font-weight-normal">Meditation</h2>
									</div>
									<p style={{color: 777}} className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, vel! Eius pariatur nemo expedita.</p>
									<Link to={`/meditation`}>
									<a href="#" className="section-more-link">See More <i className="icon-angle-right"></i></a>
									</Link>								</div>
	
								<div className="col-lg-4    center">
									<img src={profile2} alt="Stunning Graphics" data-animate="fadeInRight"  className="profile-img"></img>
								</div>
							</div>
							<div className="container mt-6 mb-6	">
								<div className="row col-mb-50 mb-0 mt-5">
                                {meditation.slice(0, 6).map(services => (
										<Service 
										color={color2} 
                                        key={services.id}
                                        id={services.id} 
                                        title={services.title}
                                        short_des={services.short_description}
										specialist_title={services.type_of_service}/>
                                    ))}
								</div>
							</div>
			
						</div>
						<div className="line"></div><div className="clear"></div>

						<div id="section-nextgen" className="page-section bottommargin-lg">
							<div className="row clearfix d-flex justify-content-between">
								<div className="col-lg-4 center">
									<img src={profile3} alt="NextGen Framework" data-animate="fadeInLeft"  className="profile-img"></img>
								</div>

								<div className="col-lg-5">
									<div className="topmargin-lg d-none d-lg-block"></div>
									<div className="emphasis-title bottommargin-sm">
										<span className="before-heading">svetlana valereevna</span>
										<h2 style={{fontSize: '42px'}} className="font-body ls1 font-weight-normal">Cosmetics</h2>
									</div>
									<p style={{color: 777}} className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, vel! Eius pariatur nemo expedita.</p>
									<Link to={`/cosmetics`}>
									<a href="#" className="section-more-link">See More <i className="icon-angle-right"></i></a>
									</Link>								</div>
							</div>
						</div>
						<div className="container mt-6 mb-6	">
							<div className="row col-mb-50 mb-0 mt-5">
                            {cosmetics.slice(0, 6).map(services => (
										<Service 
										color={color3} 
                                        key={services.id}
                                        id={services.id} 
                                        title={services.title}
                                        short_des={services.short_description}
										specialist_title={services.type_of_service}/>
                                    ))}
							</div>
						</div>
					</div>

    );
}

export default ServiceList;

