import React from 'react';

export default function Hoc(WrappedComponent) {
	return class InnerComp extends React.Component {
		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
}
