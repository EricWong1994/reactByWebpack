import React from 'react';
import { connect } from 'react-redux'; //链接器
import './index.css';

const TodoList = props => {
	let { inputValue, list, inputChange, clickBtn, deletItem } = props;

	const clickBtnHandler = index => {
		deletItem(index);
	};

	return (
		<div className='content'>
			<div className='todoListDiv'>
				<div className='inputDiv'>
					<input value={inputValue} onChange={inputChange} />
					<button onClick={clickBtn}>新增</button>
				</div>
				<div className='listDiv'>
					<ul>
						{list.map((item, index) => {
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
		inputValue: state.inputValue,
		list: state.list,
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

export default connect(stateToProps, dispatchToProps)(TodoList);
