import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import './style.scss'

export default class Jumplink extends React.Component {
    
    render() {
        let {routerdata} = this.props
        return <div className="footer-list">
            {routerdata && routerdata.length && routerdata.map((item, index) => {
                return <Link to={item.path} key={index}>{item.title}</Link>
            })}
        </div>
    }
}