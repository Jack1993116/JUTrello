import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import './first.css';
import Signup from './component/signup';
import Navbar from './component/navbar';
import Header from './component/header';
import Teamdiv from './component/teamdiv';
import Infodiv from './component/infodiv';
import Builtdiv from './component/builtdiv';
import Howdiv from './component/howdiv';
import Trelloway from './component/trelloway';
import Smarter from './component/smarter';
import Footer from './component/footer';

class First extends React.Component{
	constructor(props){
		super(props);
		this.state={
			opacity: 0
		}
	}
	componentDidMount() {
	    document.addEventListener('scroll', () => {
	    	const a = window.scrollY;
	      if (a > 80) {
	          this.setState({ 
	          	 opacity: 1
	           })
	      }else{
	      	this.setState({ 
	          	 opacity: 0
	           })
	      }
	    });
	  }
	render(){
		return (
			<>
				<Navbar opacity={this.state.opacity}/>	
				<Header />
				<div className='mainbody'>
					<Teamdiv />
					<Infodiv />
					<Builtdiv />
					<Howdiv />
					<Trelloway />
				</div>
				<div className='footer'>
					<Smarter />
					<Footer />
				</div>
			</>	
		);
	}
}

export default First;