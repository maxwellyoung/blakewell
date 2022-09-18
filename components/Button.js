import React from 'react'
import Image from 'next/image'

const Button = (props) => {
	return (
		<div className="buttonContainer">
			<a className="button">{props}</a>
			<Image src="/Arrow.svg" alt="arrow" />
		</div>
	)
}

export default Button
