import React from 'react';
import { Checkbox, Button } from 'antd';
import ReactDOM from 'react-dom';
const mountNode = document.querySelector('#antd');

class App extends React.Component {
	state = {
		checked: true,
		disabled: false,
	};

	toggleChecked = () => {
		this.setState({ checked: !this.state.checked });
	};

	toggleDisable = () => {
		this.setState({ disabled: !this.state.disabled });
	};

	onChange = (e: any) => {
		console.log('checked = ', e.target.checked);
		this.setState({
			checked: e.target.checked,
		});
	};

	render() {
		const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${
			this.state.disabled ? 'Disabled' : 'Enabled'
		}`;
		return (
			<>
				<p style={{ marginBottom: '20px' }}>
					<Checkbox
						checked={this.state.checked}
						disabled={this.state.disabled}
						onChange={this.onChange}
					>
						{label}
					</Checkbox>
				</p>
				<p>
					<Button
						type='primary'
						size='small'
						onClick={this.toggleChecked}
					>
						{!this.state.checked ? 'Check' : 'Uncheck'}
					</Button>
					<Button
						style={{ margin: '0 10px' }}
						type='primary'
						size='small'
						onClick={this.toggleDisable}
					>
						{!this.state.disabled ? 'Disable' : 'Enable'}
					</Button>
				</p>
			</>
		);
	}
}

ReactDOM.render(<App />, mountNode);
