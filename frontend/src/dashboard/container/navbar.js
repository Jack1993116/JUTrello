import React from 'react';
import NavSearch from '../component/navSearch';
import BoardSidePanel from "../component/boardsidepanel";
import {MDBIcon} from 'mdbreact';


class NavBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			boardSidePanel: false
		};
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.boardSidePanel = this.boardSidePanel.bind(this);
	}

	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
			this.setState({
				boardSidePanel: false
			});
		}
	}

	boardSidePanel(){
		this.setState({
			boardSidePanel: !this.state.boardSidePanel
		})
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}


	render(){
		return (
			<div ref={this.setWrapperRef} className='navbar_div' style={{backgroundColor: this.props.bgcolor}} >
				<div className='left'>
					<a href="/dashboard">
						<button className='nav_btn'>
							<MDBIcon icon="home" />
						</button>
					</a>
					<button  className='nav_btn' onClick={this.boardSidePanel}>
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
					<button  className='nav_btn' style={{background:'#eb5a46'}}>
						<strong>
							<MDBIcon far icon="bell"/>
						</strong>
					</button>
					<button  className='nav_btn circle'>
					<strong>J</strong>
					</button>
				</div>
				{
					this.state.boardSidePanel && <BoardSidePanel />
				}
				
				
			</div>
			
		)
	}
}


export default NavBar;