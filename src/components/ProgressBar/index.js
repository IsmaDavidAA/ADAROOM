import React from 'react'

const progressBar = ({progress}) => {
		
	return (
	<div >
		<div >
			<span >{`${progress}%`}</span>
		</div>
	</div>
	)
}

export default progressBar;