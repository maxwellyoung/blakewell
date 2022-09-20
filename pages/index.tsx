import React, { useRef, useState, useLayoutEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import footerStyles from '../styles/Footer.module.css'
import { motion, Variants } from 'framer-motion'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Hero from '../components/Hero'
import Expertise from '../components/Expertise'
import Works from '../components/Works'
import Awards from '../components/Awards'
import Footer from '../components/Footer'

const Home: NextPage = () => {
	const scrollRef = useRef(null)

	return (
		<div
			ref={scrollRef}
			style={{ overflow: 'scroll' }}
			className={styles.container}
		>
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
			<section>
				<Expertise />
			</section>
			<section>
				<Works />
			</section>
			<section>
				<Awards />
			</section>
			<div className={footerStyles.container}>
				<Footer />
			</div>
		</div>
	)
}

export default Home
