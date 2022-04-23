const defaultState = {
	inputValue: 'Hearling',
	list: [],
	userInfo: '李白',
};

export default (state = defaultState, action) => {
	const { payload } = action;

	if (action.type === 'change_input') {
		let newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return {
			...newState,
			userInfo: '杜甫',
		};
	}

	if (action.type === 'add_item') {
		let newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}
	if (action.type === 'delete_item') {
		let newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(payload, 1);
		return newState;
	}
	return state;
};
