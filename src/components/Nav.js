import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from '../static/images/logo.png';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {loadList} from '../actions/listAction';
import {useLocation} from 'react-router-dom';
const  Nav = () => {
	const NavStyled = styled.div`
	z-index: 100;
	width: 100%;
	top: 0;
	position: fixed;
	background-color: rgba(255,255,255, .95);
	box-shadow: 0px -10px 50px rgba(204, 204, 204, 0.4);

	@media(max-width: 991px){
		background-color: rgba(255,255,255,1);
		display: block;
		position: inherit;
	}
	border-bottom: 1px solid  rgba(204, 204, 204, 0.2);

	img{
		height: 96px;
	}
`

// useEffect(() =>{
	// dispatch(loadList(pathId));
	// }, [dispatch]);
	const location = useLocation();  
	const dispatch = useDispatch();
	const pathId = location.pathname.split('/')[1];   
	const loadListHandler = (type_of) => {
		dispatch(loadList(type_of))
	}

    return (
      <NavStyled>
		 <nav id="navbarscroll"class="navbar navbar-expand-lg navbar-light d-flex justify-content-center	">
		 	<div className="container">
			 <Link to="/"><a class="standard-logo"><img src={logo} alt="Canvas Logo"></img></a></Link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
			<div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
				<div class="navbar-nav">
				<Link to="/"><a class="menu-link"><div >Home</div></a></Link>
				<Link to="/cosmetology"><a class="menu-link" onClick={loadListHandler(pathId)}><div>Cosmetology</div></a></Link>
				<Link to="/meditation"><a class="menu-link" onClick={loadListHandler(pathId)}><div>Meditation</div></a></Link>
				<Link to="/cosmetics"><a class="menu-link" onClick={loadListHandler(pathId)}><div>Cosmetics</div></a></Link>
				<Link to="/about"><a class="menu-link" ><div>About Us</div></a></Link>
				<Link to="/contact" ><a class="menu-link" ><div>Contact Us</div></a></Link>
				</div>
			</div>
			 </div>
		</nav>
	  </NavStyled>
	)
	

}

export default Nav;
