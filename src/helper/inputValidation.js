export function validateInputField(string,name){
	if(string.length <= 1)
			return false
		switch(name){
			case 'username':{
				const valid = string.search(/[^\w-]|(-)\1/) === -1 ? true : false
				return valid ? false : 'Username not valid'
			}
			case 'email':{
				// eslint-disable-next-line
				const valid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/).test(string) 
				return valid ? false : 'Email not valid'
			}
			case 'psw': case 'newPsw': case 'confirmPsw':{
				const valid = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(string)
				return valid ? false : 'Password has to be min 8 chars, at least one uppercase letter, one lowercase letter, one number and one special character'
			}
			case 'name': case 'surname': case 'street': case 'city': case 'province': case 'state':{
				const valid = (/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/g).test(string)
				return valid ? false : 'Special chars not allowed'
			}
			case 'phone': { 
				const valid = (/(^\+{1}[0-9]*$)|(^[0-9]*$)/g).test(string)
				return valid ? false : 'Only numbers'
			}
			case 'zip':{
				const valid = (/^[0-9]*$/g).test(string)
				return valid ? false : 'Only numbers'
			}
			case 'number':{
				const valid = (/^[0-9]*[/]?[0-9a-zA-Z]{1,2}$/g).test(string)
				return valid ? false : 'Number not valid'
			}
			case 'date':{ //need to be implemented
				return false
			}
			default: {return 'Looks like something is wrong!'}
		}
}