import React from 'react'

const progressBar = ({progress}) => {

    const Parentdiv = {
		height: '30px',
		width: '420px',
		backgroundColor: 'var(--plomoAgua)',
		borderRadius: 5,
	}

	return (
	<div >
		<div style={Parentdiv}>
			<span >{`${progress}%`}</span>
		</div>
	</div>
	)
}

export default progressBar;