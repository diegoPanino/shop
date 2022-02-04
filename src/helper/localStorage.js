export function getStorage(){
	const storage = window.localStorage
	return storage
}
export function getTokens(){
	const a = getA()
	const r = getR()
	return {a,r}
}
export function getA(){
	const storage = getStorage()
	return storage.getItem('a')
}
export function getR(){
	const storage = getStorage()
	return storage.getItem('r')
}
export function setA(a){
	const storage = getStorage()
	storage.setItem('a',a)
}
export function setR(r){
	const storage = getStorage()
	storage.setItem('r',r)
}
export function removeA(){
	const storage = getStorage()
	storage.removeItem('a')
}
export function removeR(){
	const storage = getStorage()
	storage.removeItem('r')
}