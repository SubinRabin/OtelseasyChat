import React, { Component } from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'
import { SideBarOption } from './SideBarOption'
import { get,last,differenceBy } from 'lodash'
import { createChatNameFromUsers } from '../../Factories'

export default class SideBar extends Component {
	static type = {
		CHATS:'chats',
		USERS:'users'
	}
	constructor(props) {
		super(props)
		this.state = {
			receiver:"",
			activeSideBar: SideBar.type.CHATS
		}
	}
	handleSubmit=(e)=>{
		e.preventDefault()
		const { receiver } = this.state
		const { onSendPrivateMessage } = this.props

		onSendPrivateMessage(receiver)
		this.setState({receiver:""})

	}
	addChatForUser = (receiver) => {
		this.setActiveSideBar(SideBar.type.CHATS)
		this.props.onSendPrivateMessage(receiver)
	}
	setActiveSideBar = (type)=> {
		this.setState({ activeSideBar:type })
	}
	render() {
		const { chats, activeChat, user, setActiveChat, logout,users} = this.props
		const { receiver,activeSideBar } = this.state
		return (
			<div id="side-bar">
				<form onSubmit={this.handleSubmit} className="search">
					<input type="text" 
						   value={receiver}
						   placeholder="Search" 
						   onChange={(e)=>{this.setState({receiver:e.target.value})}}  
					/>
					<div className="plus">
						<FaPlus/>
					</div>
				</form>
				<div className="side-bar-select">
					<div 
						onClick={ ()=>{ this.setActiveSideBar(SideBar.type.CHATS) } }
						className={ `side-bar-select__option ${(activeSideBar === SideBar.type.CHATS) ? 'active' : ''}` }>
						<span>Chats</span>
					</div>
					<div 
						onClick={ ()=>{ this.setActiveSideBar(SideBar.type.USERS) } }
						className={ `side-bar-select__option ${(activeSideBar === SideBar.type.USERS) ? 'active' : ''}` }>
						<span>Users</span>
					</div>
				</div>	
				<div
					className="users"
					ref="users"
					onClick={(e)=>{ (e.target === this.refs.user) && setActiveChat(null) }}>
					{
						activeSideBar === SideBar.type.CHATS ?
						chats.map((chat)=> {
							if (chat.name) {
								return(
									<SideBarOption
										key = {chat.id}
										name ={chat.isCommunity ? chat.name : createChatNameFromUsers(chat.users,user.name)}
										lastMessage={get(last(chat.messages),'message','')}
										active= {activeChat.id===chat.id}
										onClick={()=> { this.props.setActiveChat(chat) }}
									/>
								)
							}
							return null
						})
						: 
						differenceBy(users, [user], 'name').map((otheruser)=>{
							return <SideBarOption 
								key = { otheruser.id }
								name = { otheruser.name }
								onClick = { ()=>{ this.addChatForUser(otheruser.name) }  }
							/>
						})
					}
				</div>
				<div className="current-user">
					<span>{user.name}</span>
					<div onClick={()=>{logout()}} title="logout" className="logout">
						<FaSignOutAlt/>
					</div>
				</div>
			</div>
		);
	}
}
