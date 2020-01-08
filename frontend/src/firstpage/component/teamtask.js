import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';


class Teamtask extends React.Component{
	render(){
		return (
			<div className='teamtask_div'>
				<div className='teamtask_title'>
					<h5>Team Tasks</h5>
				</div>
				<div style={{'width':'500px'}}>
					<div className='task_card'>
						Doing
						<div className='task_card_inner_div'>
						client meeting
						</div>
						<div className='task_card_inner_div'>
						client meeting
						</div>
						<div className='task_card_inner_div'>
						client meeting
						</div>
					</div>
					<div className='task_card'>
						Done
					</div>
				</div>
			</div>
		);
	}
}

export default Teamtask;