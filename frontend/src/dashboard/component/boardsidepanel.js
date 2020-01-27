import React from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { MDBCol, MDBIcon} from "mdbreact";
import Board from "../component/board";
import Templete from "../component/templete";
import Createboard from "../component/createboard";
import CreateGroup from "../component/createGroup";

import "../assets/scroll.css";

const mapStateToProps = state => ({
	usercollection: state.dashboard.usercollection,
	stared: state.dashboard.stared
});


class BoardSidePanel extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			search: "",
			staredDiv: true,
			personalDiv: true,
			groupDiv: true
		}
		this.search = this.search.bind(this);
		this.staredDiv = this.staredDiv.bind(this);
		this.groupDiv = this.groupDiv.bind(this);
		this.personalDiv = this.personalDiv.bind(this);
	}

	search(e){
		this.setState({
			search: e.target.value
		});
	}

	staredDiv(){
		this.setState({
			staredDiv: !this.state.staredDiv
		})
	}

	groupDiv(){
		this.setState({
			groupDiv: !this.state.groupDiv
		})
	}

	personalDiv(){
		this.setState({
			personalDiv: !this.state.personalDiv
		})
	}

	render(){

		return (
<div className="sideboard_div scrollbar scrollbar-info">
		<input className="sidepanel_search" onChange={this.search} type="text" placeholder="Find boards by name..." />

		{/*seached board part in side panel*/}
		{
			this.state.search !== "" &&
			<div>
			{
				this.props.usercollection.collections.map(row=>{
					if (row.title.indexOf(this.state.search) !== -1) {

						if (this.props.stared.indexOf(row._id) === (-1)) {
							return (
								<li style={{display:"inline"}} key={row._id}>
								<Board url={row.imgurl} 
								title={row.title} 
								collectionid={row._id} 
								color={row.color} 
								key={`board${row._id}`}
								type="sidepanel"
								/>
								</li>
								)
						} else {
							return (
								<li style={{display:"inline"}} key={row._id}>
								<Board url={row.imgurl} 
								title={row.title} 
								collectionid={row._id} 
								color={row.color}
								type="sidepanel" 
								/>
								</li>
								)
						}

					}
				})
			}
			<div className="sidepanel_func_div">
			Create board named "{this.state.search}"
			</div>
			</div>
		}

{/*stared board part in side panel*/}
	{
		this.state.search === "" && 
		<div>
			<MDBIcon far icon="star" /> Starred Boards 
			<button className="sidepanel_btn" onClick={this.staredDiv} type="button">
			<MDBIcon icon={this.state.staredDiv?"plus":"minus"} />
			</button>
		</div>
	}
	{
		this.state.staredDiv && this.state.search === "" && 
		<div>
		{

			this.props.stared.map(starone => {

				return(

					this.props.usercollection.collections.map(row=>{
						if (starone===row._id) {
							return (
								<Board 
									url={row.imgurl} 
									title={row.title} 
									collectionid={row._id}
									color={row.color} 
									key={`staredboard${row._id}`}
									type="sidepanel"
									/>
								);
						}
					})

					)

			})

		}
		</div>
	}
	{
		this.state.search === "" && this.state.staredDiv === false &&
		<div>
			<p style={{fontSize: "15px", fontWeight: "normal" , color: "grey"}}>Star your most important boards to keep them right at your fingertips.</p>
		</div>
	}

{/*personal board part in side panel*/}
	{
		this.state.search === "" && 
		<div>
			<MDBIcon far icon="user" /> Personal Boards
			<button className="sidepanel_btn" onClick={this.personalDiv} type="button"><MDBIcon icon={this.state.personalDiv?"plus":"minus"} /></button>
		</div>
	}
	{
		this.state.search === "" && this.state.personalDiv &&
		<div>
		{
			this.props.usercollection.collections.map(row=>{

				if (this.props.stared.indexOf(row._id) === (-1)) {
					return (
						<li style={{display:"inline"}} key={row._id}>
							<Board url={row.imgurl} 
								title={row.title} 
								collectionid={row._id} 
								color={row.color} 
								key={`board${row._id}`}
								type="sidepanel"
							/>
						</li>
						)
				} else {
					return (
						<li style={{display:"inline"}} key={row._id}>
							<Board url={row.imgurl} 
								title={row.title} 
								collectionid={row._id} 
								color={row.color}
								type="sidepanel" 
								/>
						</li>
						)
				}

			})
		}
		</div>
	}

{/*group board part in side panel*/}
	{
		this.state.search === "" && 
		<div>
		{
			this.props.usercollection.groups.map(row=>{
				return (
					<div key={`grouplist${row._id}`}>
						<MDBIcon icon="user-friends" /> {row.name}
						<button className="sidepanel_btn" type="button"><MDBIcon icon="plus" /></button>
					</div>)
			})
		}
		</div>
	}


{/*create board part in side panel*/}
	{
		this.state.search === "" && 
		<div className="sidepanel_func_div">
			<Createboard 
				groups={this.props.usercollection.groups}
				rerenderParent={this.rerender}
				type="sidepanel"
				/>
		</div>
	}


{/*keep side bar part in side panel*/}
	{
		this.state.search === "" && 
		<div className="sidepanel_func_div">
			Always keep this menu open.
		</div>
	}

{/*See closed boards part in side panel*/}
	{
		this.state.search === "" && 
		<div className="sidepanel_func_div">
			See closed boards...
		</div>
	}
</div>

);
		
	}
}
export default connect(mapStateToProps, null)(withRouter(BoardSidePanel));