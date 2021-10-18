import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

// console.log('ReactDOM: ', ReactDOM);

const history = createBrowserHistory();
const hash = createHashHistory();

class Home extends React.Component {
	render() {
		return (
			<>
				<div>Home</div>
				<Link to='/about'>About</Link>
			</>
		);
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
function HomeButton() {
	let history = useHistory();
	console.log('history: ', history);

	function handleClick() {
		history.push('/home');
	}

	return (
		<div>
			<button type='button' onClick={handleClick}>
				Go home
			</button>
		</div>
	);
}
function BlogPost() {
	let { slug } = useParams();
	return <div>Now showing post {slug}</div>;
}

let routesWithSwitch = (
	<div>
		{/* <Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route path='/about'>
				<div>
					<About></About>
					<HomeButton></HomeButton>
				</div>
			</Route>
			<Route path='/home'>
				<Home />
			</Route>
			<Route path='/:user'>
				<User></User>
			</Route>
			<Route path='/blog/:slug'>
				<BlogPost />
			</Route>
			<Route path='/qita'>
				<Qita />
			</Route>
			<Redirect from='/zzz' to='/about' />
			<Redirect from='/accounts' to='/qita' />
			<Route component={NoMatch}></Route>
		</Switch> */}
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route path='/blog/:slug'>
				<BlogPost />
			</Route>
		</Switch>
	</div>
);

function usePageViews() {
	let location = useLocation();
	// console.log('ReactGA: ', ReactGA);
	// var ga = ReactGA.ga();
	var ga = ReactGA;
	React.useEffect(() => {
		// console.log('location: ', location);
		ga.send(['pageview', location.pathname]);
	}, [location]);
}

const App = () => {
	usePageViews(); // Router组件不能和usePageViews
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			{routesWithSwitch}
		</div>
		// <HashRouter routes={routes} /> 写法废弃
		// <Router history={hash} routes={routes} />
	);
};
// const App = () =>(
//   <HashRouter>
//     <Route path="/" component={Home} />
//   </HashRouter>
// )

// ReactDOM.render(<App />, document.querySelector('#app'));
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.querySelector('#app')
);

// ReactDOM.render(<Router history={hash} routes={routes} />, document.querySelector('#app'))
// ReactDOM.render(routes, document.querySelector('#app'))

// let routes = (
// 	<div>
// 		<Route path='/about'>
// 			<About />
// 		</Route>
// 		<Route path='/:user'>
// 			<User />
// 		</Route>
// 		<Route>
// 			<NoMatch />
// 		</Route>
// 	</div>
// );
