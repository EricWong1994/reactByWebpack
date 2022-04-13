import * as ApiServer from './index';
export const getUserInfo = params => {
	// return ApiServer.post('/user/login', params).then(res => res.data);
	return ApiServer.post('/login', params).then(res => res.data);
};
