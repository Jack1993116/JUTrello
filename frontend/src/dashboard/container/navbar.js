import React from 'react';
import {Link} from "react-router-dom";
import NavSearch from '../component/navSearch';
import BoardSidePanel from "../component/boardsidepanel";
import PlusSidePanel from "../component/plusSidePanel";
import InfoSidePanel from "../component/infoSidePanel";
import NotiSidePanel from "../component/notiSidePanel";
import AccSidePanel from "../component/accSidePanel";
import {MDBIcon} from 'mdbreact';


class NavBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			boardSidePanel: false,
			plusSidePanel: false,
			infoSidePanel: false,
			notiSidePanel: false,
			accSidePanel: false,
		};
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.boardSidePanel = this.boardSidePanel.bind(this);
		this.plusSidePanel = this.plusSidePanel.bind(this);
		this.infoSidePanel = this.infoSidePanel.bind(this);
		this.notiSidePanel = this.notiSidePanel.bind(this);
		this.accSidePanel = this.accSidePanel.bind(this);
	}

	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
			this.setState({
				boardSidePanel: false,
				plusSidePanel: false,
				infoSidePanel: false,
				notiSidePanel: false,
				accSidePanel: false,
			});
		}
	}

	boardSidePanel(){
		this.setState({
			boardSidePanel: !this.state.boardSidePanel,
			plusSidePanel: false,
			infoSidePanel: false,
			notiSidePanel: false,
			accSidePanel: false,
		})
	}

	plusSidePanel(){
		this.setState({
			boardSidePanel: false,
			plusSidePanel: !this.state.plusSidePanel,
			infoSidePanel: false,
			notiSidePanel: false,
			accSidePanel: false,
		})
	}

	infoSidePanel(){
		this.setState({
			boardSidePanel: false,
			plusSidePanel: false,
			infoSidePanel: !this.state.infoSidePanel,
			notiSidePanel: false,
			accSidePanel: false,
		})
	}

	notiSidePanel(){
		this.setState({
			boardSidePanel: false,
			plusSidePanel: false,
			infoSidePanel: false,
			notiSidePanel: !this.state.notiSidePanel,
			accSidePanel: false,
		})
	}

	accSidePanel(){
		this.setState({
			boardSidePanel: false,
			plusSidePanel: false,
			infoSidePanel: false,
			notiSidePanel: false,
			accSidePanel: !this.state.accSidePanel,
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
					<Link to="/dashboard">
						<button className='nav_btn'>
							<MDBIcon icon="home" />
						</button>
					</Link>
					<button  className='nav_btn' onClick={this.boardSidePanel}>
						<strong>Boards</strong>
					</button>
					<NavSearch/>
				</div>
				
				<Link to='/dashboard'>
					<img alt="Trello" className="trelloimg_dashboard" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg"/>
				</Link>
				<div className='right'>
					<button  className='nav_btn' onClick={this.plusSidePanel}>
						<strong>
							<MDBIcon icon="plus" />
						</strong>
					</button>
					<button  className='nav_btn' onClick={this.infoSidePanel}>
						<strong>
							<MDBIcon icon="info-circle" />
						</strong>
					</button>
					<button  className='nav_btn' style={{background:'#eb5a46'}} onClick={this.notiSidePanel}>
						<strong>
							<MDBIcon far icon="bell"/>
						</strong>
					</button>
					<button  className='nav_btn circle' onClick={this.accSidePanel}>
					<strong>{localStorage.trellouseremail?localStorage.trellouseremail[0]:""}</strong>
					</button>
				</div>
				{this.state.boardSidePanel && <BoardSidePanel />}
				{this.state.plusSidePanel && <PlusSidePanel closethis={this.plusSidePanel}/>}
				{this.state.infoSidePanel && <InfoSidePanel closethis={this.infoSidePanel}/>}
				{this.state.notiSidePanel && <NotiSidePanel closethis={this.notiSidePanel}/>}
				{this.state.accSidePanel && <AccSidePanel closethis={this.accSidePanel}/>}

				
				
			</div>
			
		)
	}
}


export default NavBar;