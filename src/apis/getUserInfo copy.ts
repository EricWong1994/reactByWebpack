import * as ApiServer from './index';
export const getUserInfo = (params: any) => {
	return ApiServer.post('/user/login', params).then(res => res.data);
};
