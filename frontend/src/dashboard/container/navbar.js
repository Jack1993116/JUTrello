import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import NavSearch from '../component/navSearch';

class NavBar extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className='navbar_div'>
				<div className='left'>
					<button className='nav_btn'>
						<strong>home</strong>
					</button>
					<button  className='nav_btn'>
						<strong>Boards</strong>
					</button>
					<NavSearch/>
				</div>
				
				<img alt="Trello" className="trelloimg" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg"/>
				<div className='right'>
					<button  className='nav_btn'>
						<strong>+</strong>
					</button>
					<button  className='nav_btn'>
						<strong>i</strong>
					</button>
					<button  className='nav_btn'>
						<strong>n</strong>
					</button>
					<button  className='nav_btn circle'>
					<strong>J</strong>
					</button>
				</div>
				


			</div>
			
		)
	}
}


export default NavBar;