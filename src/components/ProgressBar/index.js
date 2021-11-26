import React from 'react'

const progressBar = ({progress}) => {

    const Parentdiv = {
		height: '30px',
		width: '420px',
		backgroundColor: 'var(--plomoAgua)',
		borderRadius: 5,
	}
	
	const Childdiv = {
		height: '30px',
		width: `${progress}%`,
		backgroundColor: '#48D1CC',
	    borderRadius: 5,
		textAlign: 'right',
	}

	return (
	<div >
		<div style={Parentdiv}>
			<span style={Childdiv}>{`${progress}%`}</span>
		</div>
	</div>
	)
}

export default progressBar;