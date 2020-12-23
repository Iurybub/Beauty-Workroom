import React, {Component} from 'react'
import axios from 'axios'
import {FormURL} from '../api';

class Form extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        let data = this.state
       axios({
           method: 'post',
           url: FormURL(),
           data:{
               name: this.state.name,
               email: this.state.email,
               subject: this.state.subject,
               message: this.state.message,
           }
       })
        
    }

    handleInputChange(event){
        event.preventDefault()
        console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.email]: event.target.value,
            [event.target.subject]: event.target.value,
            [event.target.message]: event.target.value,

        })
    }

    render(){

        return(
            <div className="container mb-5 mt-5">
					<div id="section-contact" className="page-section">
					<h2 className="bottommargin">Get in Touch.</h2>
						<div className="row clearfix">
							<div className="col-12">
								<div className="form-widget">
									<div className="form-result"></div>
									<form className="row mb-0" id="template-contactform" name="template-contactform" onSubmit={this.handleSubmit}>
										<div className="form-process">
											<div className="css3-spinner">
												<div className="css3-spinner-scaler"></div>
											</div>
										</div>
										<div className="col-md-6 form-group">
											<input onChange={this.handleInputChange} type="text" id="template-contactform-name" name="name" className="sm-form-control border-form-control required" placeholder="Name" required="required"/>
										</div>
										<div className="col-md-6 form-group">
											<input onChange={this.handleInputChange} type="email" id="template-contactform-email" name="email"  className="required email sm-form-control border-form-control" placeholder="Email Address" required="required" />
										</div>
										<div className="clear"></div>
										<div className="col-12 form-group">
											<input onChange={this.handleInputChange} type="text" id="template-contactform-subject" name="subject"  className="required sm-form-control border-form-control" placeholder="Subject" required="required" />
										</div>
										<div className="col-12 form-group">
											<textarea onChange={this.handleInputChange} className="required sm-form-control border-form-control" id="template-contactform-message" name="message" rows="7" cols="30" placeholder="Your Message" required="required"></textarea>
										</div>
										<div className="col-12 form-group">
											<button className="button button-black ml-0 topmargin-sm" type="submit" id="template-contactform-submit" name="template-contactform-submit" value="submit">Send Message</button>
										</div>
										<div className="col-12 form-group d-none">
											<input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" className="sm-form-control" />
										</div>
										<input type="hidden" name="prefix" value="template-contactform-"></input>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
        );
    }
}

export default Form;