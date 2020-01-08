import React from 'react';
import Planing from './planing';
import Footerlink from './footerlink';


class Footer extends React.Component{
	constructor(props){
		super(props);
		this.state={
			lag: 'english'
		}
		this.changelan=this.changelan.bind(this);
	}
	changelan(e){
		this.setState({
			lag: e.target.value
		})
	}
	render(){
		return (
			<>
				<Planing />
				<Footerlink />
			</>
		);
	}
}

export default Footer;