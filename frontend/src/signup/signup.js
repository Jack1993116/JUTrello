import React from 'react';
import { withRouter } from "react-router-dom";

import Leftimg from './assets/leftimg.svg';
import Rightimg from './assets/rightimg.svg';
import './signup.css';
import signupMid from './action/signupMid';
import loginMid from './action/loginMid';
import { connect } from 'react-redux';


class SignUp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			signEmail: "",
			signPassword: ""
		}
		this.inputemail=this.inputemail.bind(this);
		this.inputpass=this.inputpass.bind(this);
		this.sendinfo=this.sendinfo.bind(this);
		this.userlogin=this.userlogin.bind(this);
	}
	inputemail(e){
		this.setState({
			signEmail: e.target.value
		})
	}
	inputpass(e){

		this.setState({
			signPassword: e.target.value
		})
	}
	sendinfo(){
		console.log("signup button pressed");
		if ((this.state.signEmail !== "") && (this.state.signPassword !== "")) {
			let userinfo = {
				signEmail: this.state.signEmail,
				signPassword: this.state.signPassword
			}
			this.props.sendinfo(userinfo,this.props.history);
		}else{
			alert("Input email and password!");
		}
		
	}
	userlogin(){
		console.log("login button pressed");
		if ((this.state.signEmail !== "") && (this.state.signPassword !== "")) {
			let userinfo = {
				loginEmail: this.state.signEmail,
				loginPassword: this.state.signPassword
			}
			this.props.userlogin(userinfo, this.props.history);
		}else{
			alert("Input email and password!");		
		}
	}
	render(){
		return (
			<div className="main_div">
				<img src={Leftimg} className="leftimg" alt='leftimg'/>
				<img src={Rightimg} className="rightimg" alt='rightimg'/>
				<div className="center_div">
					<img alt="Trello" className="trelloimg" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg"/>
					<div className="card_div">
						<h5>{this.props.type==="signup"?"Sign up":"Log in"} to Trello</h5>
						

						email:{this.props.currentuser.signEmail}
						

						<input type="email" placeholder="Enter email" onChange={this.inputemail}/>
						<div style={{display: this.state.signEmail===""?"none":""}}>
							<input type="password" onChange={this.inputpass}/>
						</div>
						<p>By signing up, you confirm that you've read and accepted our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>


						<div style={{display: this.props.type==="login"?"none":""}}>
							<button className="contunue_button" onClick={this.sendinfo}>
								<span>Continue</span>
							</button>

							<div style={{display: this.state.signEmail!==""?"none":""}}>
								<span>OR</span>
								<div className="google-button">
									<span className="icon"></span><span style={{"display":"inline-block"}}>Continue with Google</span>
								</div>
							</div>
						</div>


						<div style={{display: this.props.type=="signup"?"none":""}}>
							<button className="contunue_button" style={{backgroundColor: "#5AAC44", color: "white"}} onClick={this.userlogin}>
								<span>Continue</span>
							</button>

							<div style={{display: this.state.signEmail!==""?"none":""}}>
								<span>OR</span>
								<div className="google-button">
									<span className="icon"></span><span style={{"display":"inline-block"}}>Continue with Google</span>
								</div>
							</div>
						</div>


						<hr/>
						<a href="/login">Already have an account? Log In</a>
					</div>
					<div>
						<select className='lan_select' onChange={this.changelan}>
							<option>English</option>
							<option>Russion</option>
							<option>Chinese</option>
						</select>
						<hr/>
					</div>
					<div>
						<img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg" width="150" style={{'margin':'30px'}} alt='img'/>
					</div>
					<div className="a_div">
						<ul style={{"listStyle": "none", "display": "inline"}}>
							<li style={{'display': 'inline-block'}}><a href='#' className='footer_a'>Templates</a></li>
							<li style={{'display': 'inline-block'}}><a href='#' className='footer_a'>Pricing</a></li>
							<li style={{'display': 'inline-block'}}><a href='#' className='footer_a'>Apps</a></li>
							<li style={{'display': 'inline-block'}}><a href='#' className='footer_a'>Jobs</a></li>
							<li style={{'display': 'inline-block'}}><a href='#' className='footer_a'>Blog</a></li>
							<li style={{'display': 'inline-block'}}><a href='#' className='footer_a'>Developers</a></li>
							<li style={{'display': 'inline-block'}}><a href='#' className='footer_a'>About</a></li>
							<li style={{'display': 'inline-block'}}><a href='#' className='footer_a'>Help</a></li>
							<li style={{'display': 'inline-block'}}><a href='#' className='footer_a'>Cookie Settings</a></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	currentuser: state.signup.userinfo
});

const mapDispatchProps = (dispatch) => ({
	sendinfo: (info,history) => dispatch(signupMid(info,history)),
	userlogin: (info, history) => dispatch(loginMid(info, history))
})

export default connect(mapStateToProps, mapDispatchProps)(withRouter(SignUp));