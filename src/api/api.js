const url = 'http://localhost:3001'

export function signUp(data){
	let status

	return fetch(`${url}/signup`,{
				method: 'post',
			    headers: {'Content-Type': 'application/json'},
			  	body: JSON.stringify({...data})
			})
			.then(res => {
					status = res.ok
					return res.json()
			})
			.then(data => {
				return {data,status}
			})
			.catch(err =>{
				console.log('SignUpFetchError',err)
			})
}