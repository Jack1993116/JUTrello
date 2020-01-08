import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';

class Trelloway extends React.Component{
	render(){
		return (
			<div className='section_div'>
				<div style={{'textAlign': 'center'}}>
					<h1>Trello your way</h1>
					<p>Use Trello the way your team works best.<br/> We’ve got the flexibility & features to fit any<br/>  team’s style.</p>
				</div>
				<MDBRow>
					<MDBCol lg='4' style={{"textAlign":"center"}}>
						<img className='trelloway_img' src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/0cad30a99820b0d840a5b48635d00b6e/updated-layouts-collab.png' alt='first' />
						<h3>The Team Playbook</h3>
						<br/>
						<p>It’s easy to get your team up and running with Trello. We’ve collected all of the boards and tools you need to succeed in one handy resource.</p>
					<button className='grey_btn' type='button'>Make A Game Plan</button>

					</MDBCol>
					<MDBCol lg='4' style={{"textAlign":"center"}}>
						<img className='trelloway_img' src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/15e77c8347135120a438d17e38195e44/updated-layouts-platform.png' alt='second' />
						<h3>A Productivity Platform</h3>
						<br/>
						<p>Integrate the apps your team already uses directly into your workflow. Power-Ups turn Trello boards into living applications to meet your team's unique business needs.</p>
					<button className='grey_btn' type='button'>Power-Up Your Workflow</button>

					</MDBCol>
					<MDBCol lg='4' style={{"textAlign":"center"}}>
						<img className='trelloway_img' src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/6eaaf5e37ab67a8ed6cd7764660513b9/updated-layouts-sync.png' alt='third' />
						<h3>Always In Sync</h3>
						<br/>
						<p>No matter where you are, Trello stays in sync across all of your devices. Collaborate with your team anywhere, from sitting on the bus to sitting on the beach.</p>
						<div>
						<a href="#"><img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/eebf313cb223112b503b7322173b013c/btn-appstore-black.png" className="img-fluid black_btn" alt="Available on the App Store"/></a>
						<a href="#"><img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/bcde9868a665af4ab4efe460c46fbc7b/btn-playstore-black.png" className="img-fluid black_btn" alt="Android App on Google Play"/></a>
						</div>
					</MDBCol>
				</MDBRow>
				
			</div>
		);
	}
}

export default Trelloway;
					