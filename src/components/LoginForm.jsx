import React, { Component } from 'react';
import { VERIFY_USER } from '../Events'
import './login.css';
// import Logo from '../Logo.png'

export default class LoginForm extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	MailId:"",
	  	Password:"",
	  	error:""
	  };
	  this.handleChange = this.handleChange.bind(this);
	}

	setUser = ({user, isUser})=>{
		if(isUser){
			this.setError("Invalid Credential")
		}else{
			this.setError("")
			this.props.setUser(user)
		}
	}

	handleSubmit = (e)=>{
		e.preventDefault()
		if (this.state.MailId!=="" && this.state.Password!=="") {
			const { socket } = this.props
			const { MailId } = this.state
			const { Password } = this.state
			socket.emit(VERIFY_USER, MailId,Password, this.setUser)
		} else {
			this.setError("Email id & Password is required !")
		}
		
	}

	handleChange = (e)=>{
		this.setState({[e.target.id]:e.target.value})
	}

	setError = (error)=>{
		this.setState({error})
	}

	render() {	
		const { MailId,Password,error } = this.state
		return (
			<div className="login">
				<form onSubmit={this.handleSubmit} className="login-form" >

					<label className="welcome" htmlFor="nickname">
						<h2>Welcome</h2>
					</label>
					<span className="login-form-avatar">
						<img  alt=""/>
					</span>
					<input
						ref={(input)=>{ this.textInput = input }} 
						type="email"
						id="MailId"
						value={MailId}
						onChange={this.handleChange}
						placeholder={'Email id'}
						/>
					<input
						ref={(input)=>{ this.textInput = input }} 
						type="password"
						id="Password"
						value={Password}
						onChange={this.handleChange}
						placeholder={'Password'}
						/>
					<div 
						onClick={this.handleSubmit}
						className="login-form-btn">
						<span>LOGIN</span>
					</div>
					<div className="error">{error ? error:null}</div>
				</form>
			</div>
		);
	}
}
