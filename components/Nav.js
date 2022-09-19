import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import Header from './Header'
const Nav = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)
	function Menu(e) {
		let list = document.querySelector('ul')
		e.name === 'menu'
			? ((e.name = 'close'),
			  list.classList.add('top-[80px]'),
			  list.classList.add('opacity-100'))
			: ((e.name = 'menu'),
			  list.classList.remove('top-[80px]'),
			  list.classList.remove('opacity-100'))
	}
	return (
		<nav className="navContainer">
			<div>
				<nav className={navStyles.nav}>
					<ul className="button flex flex-row space-x-4 space-x items-center">
						<li>
							<a href="#hero">EXPERTISE</a>
						</li>
						<li>
							<a href="#portfolio">PORTFOLIO</a>
						</li>
						<Link href="/">
							<Image
								src="/Logo.svg"
								className="content-center"
								width={260}
								height={50}
								layout="intrinsic"
								alt="logo"
							/>
						</Link>
						<li>
							<a href="#tab-awards">AWARDS</a>
						</li>
						<li>
							<a href="#contact">CONTACT US</a>
						</li>
					</ul>
				</nav>
			</div>
		</nav>
	)
}

export default Nav
