import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

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
					<Header />

					<ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
						<li>
							<a href="#">EXPERTISE</a>
						</li>
						<li>
							<a href="#">PORTFOLIO</a>
						</li>
						<li>
							<a href="#">AWARDS</a>
						</li>
						<li>
							<a href="#">CONTACT US</a>
						</li>
					</ul>
				</nav>
			</div>
		</nav>
	)
}

export default Nav
