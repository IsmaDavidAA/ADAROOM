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

    const progresstext = {
		fontSize: '18px',
		color: 'black',
		fontWeight: 700
	}
	
	return (
	<div style={Parentdiv}>
		<div style={Childdiv}>
			<span style={progresstext}>{`${progress}%`}</span>
		</div>
	</div>
	)
}

export default progressBar;