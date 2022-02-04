import {auth} from '@constant/const.js'
import {getR,removeA,removeR} from '@helper/localStorage.js'
import axiosInstance from './interceptors.js'


export default function logout(){
	const r = getR()
	return axiosInstance.delete(`${auth}/logout`,{headers:{'x-refresh':r}})
	.then(data => {
		removeA()
		removeR()
		return Promise.resolve(data)
	})
	.catch(err => {
		console.log('err',err)
		return Promise.reject(err)
	})
}