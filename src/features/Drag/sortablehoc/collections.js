import React, { Component } from 'react';
import { render } from 'react-dom';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = sortableElement(({ value }) => <li>{value}</li>);

const SortableContainer = sortableContainer(({ children }) => {
	return <div>{children}</div>;
});

class App extends Component {
	state = {
		collections: [
			[0, 1, 2],
			[0, 1, 2, 3, 4],
			[0, 1, 2],
		],
	};

	onSortEnd = ({ oldIndex, newIndex, collection }) => {
		this.setState(({ collections }) => {
			const newCollections = [...collections];

			newCollections[collection] = arrayMove(
				collections[collection],
				oldIndex,
				newIndex
			);

			return { collections: newCollections };
		});
	};

	render() {
		const { collections } = this.state;

		return (
			<SortableContainer onSortEnd={this.onSortEnd}>
				{collections.map((items, index) => (
					<React.Fragment key={index}>
						<strong>LIST {index}</strong>
						<ul>
							{items.map((item, i) => (
								<SortableItem
									key={item}
									value={`Item ${item}`}
									index={i}
									collection={index}
								/>
							))}
						</ul>
					</React.Fragment>
				))}
			</SortableContainer>
		);
	}
}

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// You can also log the error to an error reporting service
		logErrorToMyService(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}

render(<App />, document.getElementById('root'));
// render(
// 	<ErrorBoundary>
// 		<App />
// 	</ErrorBoundary>,
// 	document.getElementById('root')
// );
