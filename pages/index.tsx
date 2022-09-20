import React, { useRef, useState, useLayoutEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import footerStyles from '../styles/Footer.module.css'

import Hero from '../components/Hero'
import Expertise from '../components/Expertise'
import Works from '../components/Works'
import Awards from '../components/Awards'
import Footer from '../components/Footer'

const Home: NextPage = () => {
	const scrollRef = useRef(null)

	return (
		<div ref={scrollRef} className={styles.container}>
			<Head>
				<title>BAKEWELL-WHITE</title>
				<meta
					name="description"
					content="Bakewell-white Yacht Design LTD Pace with grace / © 2022"
				/>
				<link rel="icon" href="/Logo.svg" />
			</Head>
			<section>
				<Hero />
			</section>
			<div className="frame3Bg">
				<section>
					<Expertise />
				</section>
				<section>
					<Works />
				</section>
			</div>
			<section>
				<Awards />
			</section>
			<footer className={footerStyles.container}>
				<Footer />
			</footer>
		</div>
	)
}

export default Home
