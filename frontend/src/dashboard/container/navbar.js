import React from 'react';
import NavSearch from '../component/navSearch';
import {MDBIcon} from 'mdbreact';


class NavBar extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className='navbar_div'>
				<div className='left'>
					<button className='nav_btn'>
						<MDBIcon icon="home" />
					</button>
					<button  className='nav_btn'>
						<strong>Boards</strong>
					</button>
					<NavSearch/>
				</div>
				
				<a href='/dashboard'>
					<img alt="Trello" className="trelloimg_dashboard" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg"/>
				</a>
				<div className='right'>
					<button  className='nav_btn'>
						<strong>
							<MDBIcon icon="plus" />
						</strong>
					</button>
					<button  className='nav_btn'>
						<strong>
							<MDBIcon icon="info-circle" />
						</strong>
					</button>
					<button  className='nav_btn'>
						<strong>
							<MDBIcon far icon="bell" />
						</strong>
					</button>
					<button  className='nav_btn circle'>
					<strong>J</strong>
					</button>

					<button  className='nav_btn' >
						<strong>logout</strong>
					</button>
				</div>
				


			</div>
			
		)
	}
}


export default NavBar;