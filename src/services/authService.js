import axiosInstance from './interceptors.js'
import {server} from '@constant/const.js'

export default async function getAuth(){
	try{
		const user = await axiosInstance.get(`${server}/user`)
		return {data:user,status:true}
	}
	catch(err){
		return 	{data:err,status:false}
	}
}