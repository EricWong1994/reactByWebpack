import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
	},
});

// 作者：HearLing
// 链接：https://juejin.cn/post/7025891039315492900
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
