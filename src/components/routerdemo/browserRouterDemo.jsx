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
} from 'react-router-dom';
import { createBrowserHistory, createHashHistory } from 'history';
import ReactDOM from 'react-dom';

const routes = (
	<Switch>
		<Route path='/today'>
			<h3>today</h3>
		</Route>
		<Route path='/tomorrow'>
			<h3>tomorrow</h3>
		</Route>
	</Switch>
);
function BrowserRouterDemo() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<div>
				<BrowserRouter basename='/calendar'>
					{/* <Link to='/today' />  不要用单标签 */}
					<div>
						<Link to='/today'>today</Link>
					</div>
					<div>
						<Link to='/tomorrow'>tomorrow</Link>
					</div>
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
