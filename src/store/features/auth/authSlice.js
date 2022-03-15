import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name:'auth',
	initialState:{
		user:null,
		a:null,
		p:false,
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
		toggleP:(state) => {
			state.p = !state.p
		}
	}
})

export const {setAuth,cleanAuth,/*toggleP*/} = authSlice.actions
export default authSlice.reducer