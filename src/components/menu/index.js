import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

export default class Menu extends React.Component {
    
    render() {
        let {routerdata} = this.props
        return <div className="footer-list">
            
            {this.props.children}
        </div>
    }
}