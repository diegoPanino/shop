export function getAuth(){
	const storage = window.localStorage
	const isLogged = storage.getItem('username') && storage.getItem('email') ? true : false
	return isLogged
}