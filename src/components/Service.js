import React from 'react'
import {loadDetails} from '../actions/detailAction';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

const Service = ({title,short_des, id, color}) => {   

	const dispatch = useDispatch()
	const loadDetailHandler = () => {
		dispatch(loadDetails(id))
	}

	const details = useSelector((state) => state.detail)
    return(
        <div className="col-md-4">
		    <div className="feature-box fbox-plain flex-column fbox-sm">
				<div className="fbox-content" >
					<h3 onClick={loadDetailHandler}type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">{title}</h3>	
							
					<p>{short_des}</p>
							<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
							<div class="modal-dialog  modal-dialog-scrollable">
								<div class="modal-content">
								<div class="modal-header">
									<h3 class="modal-title" id="staticBackdropLabel">{details.service.title}</h3>
									<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div class="modal-body">
									<p>{details.service.description}</p>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" style={{backgroundColor: '#b19cd9'}} data-bs-dismiss="modal">Close</button>
								</div>
								</div>
							</div>
							</div>
					
				</div>
			</div>
		</div>
    );
}

export default Service;