import React from 'react';
import icon1 from '../static/images/icons/heart.svg'
import icon2 from '../static/images/icons/lipstick.svg'
import icon3 from '../static/images/icons/balance.svg'
import icon4 from '../static/images/icons/lotus.svg'
import styled from 'styled-components';

const CTA = () => {
    const Container = styled.div`
    z-index: 1;
    `
    
    return(
        <Container>
        <div className="container mt-5 mb-5">
        <div className="row align-items-center justify-content-between">

            <div className="col-lg-4 parallax" data-bottom-top="margin-top:-50px" data-top-bottom="margin-top:50px">
                <small className="text-muted text-uppercase font-weight-light ls4 mb-1 d-block">about us</small>
                <h2 className="font-weight-bold ls0 mb-4" style={{fontSize: '38px'}}>We have been taking care of you for the last 7 years.</h2>
                <p className="text-muted" style={{fontSize:'16px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur blanditiis saepe dolore tempora nihil praesentium dolorum unde, earum, nostrum odit?</p>
            </div>

            <div className="col-lg-7">
                <div className="row">
                    <div className="col-sm-6 mb-5">
                        <div className="flip-card">
                            <div className="flip-card-front no-after" style={{backgroundColor: '#F9F9F9'}}>
                                <div className="flip-card-inner">
                                    <div className="feature-box media-box fbox-sm">
                                        <div className="fbox-icon position-relative mb-4">
                                            <a href="#">
                                                <img src={icon1} className="rounded-0 bg-transparent text-left" alt="Image"></img>
                                            </a>
                                        </div>
                                        <div className="fbox-content">
                                            <h3 className="font-weight-normal nott">Health</h3>
                                            <p className="text-muted font-weight-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card-back dark">
                                <div className="flip-card-inner mt-3">
                                    <h4 className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit.</h4>
                                    <a href="#" className="button button-change overflow-hidden rounded nott font-weight-light m-0">
                                        <span>View Photos</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-5">
                        <div className="flip-card">
                            <div className="flip-card-front no-after" style={{backgroundColor: '#F9F9F9'}}>
                                <div className="flip-card-inner">
                                    <div className="feature-box media-box fbox-sm">
                                        <div className="fbox-icon position-relative mb-4">
                                            <a href="#">
                                                <img src={icon2} className="rounded-0 bg-transparent text-left" alt="Image"></img>
                                            </a>
                                        </div>
                                        <div className="fbox-content">
                                            <h3 className="font-weight-normal nott">Beauty</h3>
                                            <p className="text-muted font-weight-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card-back dark">
                                <div className="flip-card-inner mt-3">
                                    <h4 className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit.</h4>
                                    <a href="#" className="button button-change overflow-hidden rounded nott font-weight-light m-0">
                                        <span>View Photos</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-5">
                        <div className="flip-card">
                            <div className="flip-card-front no-after" style={{backgroundColor: '#F9F9F9'}}>
                                <div className="flip-card-inner">
                                    <div className="feature-box media-box fbox-sm">
                                        <div className="fbox-icon position-relative mb-4">
                                            <a href="#">
                                                <img src={icon3} className="rounded-0 bg-transparent text-left" alt="Image"></img>
                                            </a>
                                        </div>
                                        <div className="fbox-content">
                                            <h3 className="font-weight-normal nott">Balance</h3>
                                            <p className="text-muted font-weight-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card-back dark">
                                <div className="flip-card-inner mt-3">
                                    <h4 className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit.</h4>
                                    <a href="#" className="button button-change overflow-hidden rounded nott font-weight-light m-0">
                                        <span>View Photos</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="flip-card">
                            <div className="flip-card-front no-after" style={{backgroundColor: '#F9F9F9'}}>
                                <div className="flip-card-inner">
                                    <div className="feature-box media-box fbox-sm">
                                        <div className="fbox-icon position-relative mb-4">
                                            <a href="#">
                                                <img src={icon4} className="rounded-0 bg-transparent text-left" alt="Image"></img>
                                            </a>
                                        </div>
                                        <div className="fbox-content">
                                            <h3 className="font-weight-normal nott">Wellness</h3>
                                            <p className="text-muted font-weight-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card-back dark">
                                <div className="flip-card-inner mt-3">
                                    <h4 className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit.</h4>
                                    <a href="#" className="button button-change overflow-hidden rounded nott font-weight-light m-0">
                                        <span>View Photos</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Container>
    );
}

export default CTA;