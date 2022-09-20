import React, { useRef, useState, useLayoutEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion, Variants } from 'framer-motion'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const Hero = () => {
	return (
		<div>
			<div className="hero">
				<div className="heroContent">
					<div className="heroBG ">
						<div className="heroGradient"></div>
						<div className="logoContainer ">
							<motion.div
								className="logo"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 1 }}
							>
								<a href="#">
									<Image
										alt="big logo"
										src="/LogoLarge.svg"
										layout="responsive"
										width="1000"
										height="90"
									/>
								</a>
							</motion.div>
							<ul className="caption contact">
								<li className="">
									+64 9 480 6800 <br /> INFO@BAKEWELL-WHITE@GMAIL.COM
								</li>
								<li>
									BAKEWELL-WHITE YACHT DESIGN LTD <br /> PACE WITH GRACE /
									&copy; 2022
								</li>
								<li>
									EST. 1994
									<br />
									AUCKLAND / NEW ZEALAND
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
