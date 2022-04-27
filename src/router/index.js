import React from 'react'
// import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Index from '../pages/index/index.js'

export default class RouterMain extends React.Component {
    render() {
        return (
			<Router>
				<Switch>
					<Route path='/' exact>
						<Redirect to='/index'></Redirect>
					</Route>
					{/* <Route exact path='/404' component={NotFound}></Route> */}
					<Route ele path='/index' component={Index}></Route>
				</Switch>
			</Router>
		);
    }
}

const NotFound = () => {
	return (
		<div>
			<h2>404 兜底页面</h2>
		</div>
	)
}