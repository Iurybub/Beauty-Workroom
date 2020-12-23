import React from "react";
import {Link} from 'react-router-dom';
import header1 from '../static/images/header/header-1.jpg'
import header2 from '../static/images/header/header-2.jpg'
import header3 from '../static/images/header/header-3.jpg'
import styled from 'styled-components';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';

const Header = () =>{

    const Slide1 = styled.div`
      background-image: url(${header1});
      background-position: center center;
      background-size: cover;
    `


    return(
      <section id="slider" className="slider-element mb-6 min-vh-60 min-vh-md-100 include-header">
			<div className="slider-inner">
				<div className="fslider h-100 position-absolute dark" data-speed="1500" data-autoplay="true" data-pause="6000" data-animation="fade" data-arrows="false" data-pagi="false" data-hover="false" data-touch="false">
					<div className="flexslider">
						<div className="slider-wrap">
							<Slide1 className="slide" style={{display:'block'}}>
								<div className="vertical-middle">
									<div className="container">
										<div className="row justify-content-center">
											<div className="col-md-7">
												<div className="heading-block border-bottom-0 parallax mb-0" data-0="opacity: 1;margin-top:0px" data-800="opacity: 0.2;margin-top:150px">
													<p>New Arrival</p>
													<h1 className="mb-4">Explore the<br></br>Beauty Workroom</h1>
													<a href="#top-service" className="button button-border button-circle button-fill fill-from-bottom button-white button-light nott font-weight-normal"><span>See More</span></a>
												</div>
											</div>
											<div className="col-md-5 align-self-lg-center align-self-md-baseline">
												<a href="https://www.youtube.com/watch?v=P3Huse9K6Xs" className="play-icon" data-lightbox="iframe"><i className="icon-googleplay"></i></a>
											</div>
										</div>
									</div>
								</div>
							</Slide1>
						</div>
					</div>
				</div>

				<div className="slider-product-desc dark">
					<div className="row m-0 d-none d-md-flex">
						<div className="col-md-6" style={{borderRight: '1px solid rgba(255,255,255,0.08)'}}>
							<div className="feature-box fbox-dark fbox-plain mb-0 d-flex align-items-center">
								<div className="fbox-icon">
									<a href="#"><i className="icon-line2-earphones"></i></a>
								</div>
								<div className="fbox-content">
									<h3 className="font-weight-normal mb-3">Explore our products</h3>
									<p className="d-none d-lg-block">With the HD 4.50 BTNC, The noisy world around you is shut out by NoiseGard™, the active noise cancellation technology developed by Sennheiser.</p>
								</div>
							</div>
						</div>

						<div className="col-md-6">
							<div className="feature-box fbox-dark fbox-plain mb-0">
								<div className="fbox-icon">
									<a href="#"><i className="icon-line2-power"></i></a>
								</div>
								<div className="fbox-content">
									<h3 className="font-weight-normal mb-3">Check out what's new</h3>
									<p className="d-none d-lg-block">Real adventures happen far away from power outlets. Fortunately, the HD 4.50 BTNC has a powerful battery that lets you enjoy music for up to 25 hours.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			
  
			</div>
		</section>
    );
}

export default Header;


