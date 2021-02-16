import React from 'react'
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Index from '../pages/index/index.js'

export default class RouterMain extends React.Component {
    render() {
        return <Router>
            <Switch>
                <Route path="/" exact>
                    <Redirect to='/index'></Redirect>
                </Route>
                <Route path="/index" component={Index}></Route>
            </Switch>
        </Router>
    }
}