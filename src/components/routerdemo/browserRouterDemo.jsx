import React from 'react';
import {
	Route,
	// HashRouter as Router,
	// BrowserRouter as Router,
	BrowserRouter,
	Switch,
	Redirect,
	useHistory,
	Link,
	useLocation,
	useParams,
	NavLink,
} from 'react-router-dom';
import { createBrowserHistory, createHashHistory } from 'history';
import ReactDOM from 'react-dom';

const Today = function () {
	const location = useLocation();
	const history = useHistory();
	console.log('Today-location: ', location);
	console.log('Today-history: ', history);

	return <h3>today</h3>;
};
const Courses = function () {
	const location = useLocation();
	const history = useHistory();
	console.log('Courses-location: ', location);
	console.log('Courses-history: ', history);

	return <h3>Courses</h3>;
};
const CoursesCom = function () {
	return <h3>CoursesCom</h3>;
};

const routes = (
	<Switch>
		<Route path='/'>home</Route>
		<Route path='/today'>
			<Today></Today>
		</Route>
		<Route path='/tomorrow'>
			<h3>tomorrow</h3>
		</Route>
		<Route path='/courses'>
			<Courses></Courses>
		</Route>
		{/* <Route>others</Route> */}
		{/* <Route>others</Route> */}
		<Redirect to='/tomorrow' />
	</Switch>
);
const testCallback = () => {
	console.log('testCallback');
};
const getConfirmation = (message, callback) => {
	// const allowTransition = window.confirm(message);
	// callback(allowTransition);
};

function BrowserRouterDemo() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<div>
				<BrowserRouter
					basename='/calendar'
					getUserConfirmation={getConfirmation(
						'Are you sure?',
						testCallback
					)}
				>
					{/* <Link to='/today' />  不要用单标签 */}
					<div>
						<Link
							to={{
								pathname: '/today',
								search: '?sort=name',
								hash: '#ttt',
								state: { price: 18 },
							}}
						>
							today
						</Link>
					</div>
					<div>
						{/* <Link to='/tomorrow'>tomorrow</Link> */}
						<Link
							to={location => ({
								...location,
								pathname: '/tomorrow',
							})}
						>
							tomorrow
						</Link>
					</div>
					<div>
						<Link
							to='/courses'
							replace
							component={CoursesCom}
						></Link>
					</div>
					<div>
						<NavLink to='/navlink' activeClassName='selected'>
							navlink
						</NavLink>
					</div>
					<div>-----------分割线-----------</div>
					{/* // renders <a href="/calendar/today"> */}
					{/* // renders <a href="/calendar/tomorrow"> */}
					...
					{routes}
				</BrowserRouter>
			</div>
		</div>
	);
}
class Home extends React.Component {
	render() {
		return 'Home';
	}
}
// const App = () => {
// 	return (
// 		<div style={{ display: 'flex', justifyContent: 'center' }}>
// 			<Switch>
// 				<Route exact path='/'>
// 					<Home />
// 				</Route>
// 				<Route path='/calendar'>
// 					<BrowserRouterDemo></BrowserRouterDemo>
// 				</Route>
// 			</Switch>
// 		</div>
// 	);
// };
// ReactDOM.render(
// 	<BrowserRouter>
// 		<App />
// 	</BrowserRouter>,
// 	document.querySelector('#app')
// );
ReactDOM.render(<BrowserRouterDemo />, document.querySelector('#app'));
