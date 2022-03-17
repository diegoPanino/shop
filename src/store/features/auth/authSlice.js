import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name:'auth',
	initialState:{
		user:null,
		a:null,
	},
	reducers:{
		setAuth: (state,action) =>{
			state.user = action.payload.user
			state.a = action.payload.a
		},
		cleanAuth:(state) =>{
			state.user = null
			state.a = null
			state.p = false
		},
	}
})

export const {setAuth,cleanAuth} = authSlice.actions
export default authSlice.reducer