import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class SideBarOption extends Component {
	static propTypes = {
		name:PropTypes.string.isRequired,
		lastMessage:PropTypes.string,
		active:PropTypes.bool,
		onClick:PropTypes.func,
	}
	static defaultProps = {
		lastMessage:"",
		active:false,
		onClick:()=> {}
	}
	render() {
        const { active, lastMessage, name, onClick } = this.props
        return (
            <div 
                className={`user ${active ? 'active':''}`}
                onClick={onClick}
                >
                <div className="user-photo">{name[0].toUpperCase()}</div>
                <div className="user-info">
                    <div className="name">{name}</div>
                    <div className="last-message">{lastMessage}</div>
                </div>
                
            </div>
        )
    }
}
