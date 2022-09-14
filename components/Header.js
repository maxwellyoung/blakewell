import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
	return (
		<div>
			<Link href="/">
				<Image
					src="/Logo.svg"
					className="content-center"
					width={260}
					height={50}
					layout="responsive"
					alt="logo"
				/>
			</Link>
			{/* </h1> */}
		</div>
	)
}

export default Header
