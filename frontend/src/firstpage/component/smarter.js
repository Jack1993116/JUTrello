import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';

class Smarter extends React.Component{
	render(){
		return (
			<div className='section_div'>
				<div className='smarter_div' style={{'textAlign': 'center'}}>
					<h1>Work smarter with Trello</h1>
					<p>Companies of all shapes and sizes use Trello.</p>
					<div>
					<img className="smarter_img" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/83b3c2b3542d1ce997306dd2c76a898d/logo-kickstarter.svg" width="207" height="24" alt="Kickstarter"/>
					<img className="smarter_img" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/99b35981e7c571708532ba39f0764aeb/logo-national-geographic.svg" width="166" height="46" alt="National Geographic"/>
					<img className="smarter_img" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/4838c7256b43105d3abe0631ac1bb72c/logo-google.svg" width="143" height="46" alt="Google"/>
					<img className="smarter_img" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/759e9aaacc706fd1f2d5f81b1a76b768/logo-fender.svg" width="153" height="55" alt="Fender"/>
					</div>
					<div>
						<button className='findout_btn' type='button'>Find out how →</button>	
					</div>
				</div>
			</div>
		);
	}
}

export default Smarter;