import React from 'react';
import logo from '../static/images/logo.png';
import styled from 'styled-components';
const Footer = () => {

	const FooterWraper = styled.div`
		background-color: #282828;
		color: white;
	`

    return(
		<FooterWraper>
        <footer id="footer" class="border-0 bg-transparent">

			<div class="container clearfix">

				<div class="footer-widgets-wrap">

					<div class="row">
						<div class="col-6 col-sm">
							<img class="mb-2" src={logo} alt="Image" width="30"></img>
							<small class="d-block mb-4 text-muted">&copy; 2020-2021</small>
							<div class="w-100 d-flex">
								<a href="#" class="social-icon si-colored si-rounded si-mini si-facebook">
									<i class="icon-facebook"></i>
									<i class="icon-facebook"></i>
								</a>
								<a href="#" class="social-icon si-colored si-rounded si-mini si-twitter">
									<i class="icon-twitter"></i>
									<i class="icon-twitter"></i>
								</a>
								<a href="#" class="social-icon si-colored si-rounded si-mini si-youtube">
									<i class="icon-youtube"></i>
									<i class="icon-youtube"></i>
								</a>
								<a href="#" class="social-icon si-colored si-rounded si-mini si-appstore">
									<i class="icon-apple"></i>
									<i class="icon-apple"></i>
								</a>
							</div>
							<div>
								<a href="#" class="social-icon si-colored si-rounded si-mini si-android">
									<i class="icon-android"></i>
									<i class="icon-android"></i>
								</a>
								<a href="#" class="social-icon si-colored si-rounded si-mini si-vimeo">
									<i class="icon-vimeo"></i>
									<i class="icon-vimeo"></i>
								</a>
								<a href="#" class="social-icon si-colored si-rounded si-mini si-amazon">
									<i class="icon-amazon"></i>
									<i class="icon-amazon"></i>
								</a>
							</div>
						</div>
						<div class="col-6 col-sm">
							<h4>Features</h4>
							<ul class="list-unstyled mb-0 text-small">
								<li><a class="text-muted" href="#">Cool stuff</a></li>
								<li><a class="text-muted" href="#">Random feature</a></li>
								<li><a class="text-muted" href="#">Team feature</a></li>
								<li><a class="text-muted" href="#">Stuff for developers</a></li>
								<li><a class="text-muted" href="#">Another one</a></li>
								<li><a class="text-muted" href="#">Last time</a></li>
							</ul>
						</div>
						<div class="col-6 col-sm col-sm mt-4 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0">
							<h4>Resources</h4>
							<ul class="list-unstyled mb-0 text-small">
								<li><a class="text-muted" href="#">Resource</a></li>
								<li><a class="text-muted" href="#">Resource name</a></li>
								<li><a class="text-muted" href="#">Another resource</a></li>
								<li><a class="text-muted" href="#">Final resource</a></li>
							</ul>
						</div>
						<div class="col-6 col-sm mt-4 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0">
							<h4>About</h4>
							<ul class="list-unstyled mb-0 text-small">
								<li><a class="text-muted" href="#">Team</a></li>
								<li><a class="text-muted" href="#">Locations</a></li>
								<li><a class="text-muted" href="#">Privacy</a></li>
								<li><a class="text-muted" href="#">Terms</a></li>
							</ul>
						</div>
					</div>

				</div>

			</div>
			<div>Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
		</footer>
		</FooterWraper>
    );
}

export default Footer;