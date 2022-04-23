import React from 'react';
import { connect } from 'react-redux'; //链接器
import './index.css';

const TodoListCopy = props => {
	console.log('todoListCopy - render ');
	let { inputValue, list, inputChange, clickBtn, deletItem } = props;

	const clickBtnHandler = index => {
		deletItem(index);
	};

	return (
		<div className='content'>
			<h3>todoListCopy</h3>
			<div className='todoListDiv'>
				<div className='inputDiv'>
					<input value={inputValue} onChange={inputChange} />
					<button onClick={clickBtn}>新增</button>
				</div>
				<div className='listDiv'>
					<ul>
						{list &&
							list.map((item, index) => {
								return (
									<li
										key={index}
										onClick={() => clickBtnHandler(index)}
									>
										{item}
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</div>
	);
};

//静态数据
const stateToProps = state => {
	return {
		// inputValue: state.inputValue,
		list: state.list,
		test: '哈哈哈哈哈',
	};
};

//方法
const dispatchToProps = dispatch => {
	return {
		inputChange(e) {
			let action = {
				type: 'change_input',
				value: e.target.value,
			};
			dispatch(action);
		},
		clickBtn() {
			let action = {
				type: 'add_item',
			};
			dispatch(action);
		},
		deletItem(payload) {
			let action = {
				type: 'delete_item',
				payload,
			};
			dispatch(action);
		},
	};
};

export default connect(stateToProps, dispatchToProps)(TodoListCopy);
