import Spinner from 'react-bootstrap/Spinner'

export default function LoadingIndicator(){
	return (
		<div className = 'd-flex justify-content-center'>
			<Spinner animation = 'grow' variant = 'secondary'/>
		</div>
		)
}