import React from 'react';
// import {Router, Route, HashRouterasRouter } from "react-router";
// import {Router, Route, HashRouter } from "react-router";
import { Router, Route } from 'react-router';
import {
	HashRouter,
	HashRouterasRouter,
	Switch,
	Redirect,
} from 'react-router-dom';
import { createBrowserHistory, createHashHistory } from 'history';
import ReactDOM from 'react-dom';
console.log('ReactDOM: ', ReactDOM);

const history = createBrowserHistory();
const hash = createHashHistory();

class Home extends React.Component {
	render() {
		return 'Home';
	}
}
class About extends React.Component {
	render() {
		return 'about';
	}
}
class User extends React.Component {
	render() {
		return 'User';
	}
}
class NoMatch extends React.Component {
	render() {
		return 'NoMatch';
	}
}
class Qita extends React.Component {
	render() {
		return 'Qita';
	}
}
let routes = (
	<div>
		<Route path='/about'>
			<About />
		</Route>
		<Route path='/:user'>
			<User />
		</Route>
		<Route>
			<NoMatch />
		</Route>
	</div>
);

let routesWithSwitch = (
	<div>
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route path='/about'>
				<About></About>
			</Route>
			<Route path='/:user'>
				<User></User>
			</Route>
			<Route path='/qita'>
				<Qita />
			</Route>
			<Redirect from='/zzz' to='/about' />
			<Redirect from='/accounts' to='/qita' />
			<Route component={NoMatch}></Route>
		</Switch>
	</div>
);

const App = () => (
	<HashRouter>
		{/* {routes} */}
		{routesWithSwitch}
	</HashRouter>
	// <HashRouter routes={routes} /> 写法废弃
	// <Router history={hash} routes={routes} />
);
// const App = () =>(
//   <HashRouter>
//     <Route path="/" component={Home} />
//   </HashRouter>
// )

ReactDOM.render(<App />, document.querySelector('#app'));
// ReactDOM.render(<Router history={hash} routes={routes} />, document.querySelector('#app'))
// ReactDOM.render(routes, document.querySelector('#app'))
