import React, { useRef, useLayoutEffect } from 'react'
import { Button } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
	const scrollRef = useRef(null)
	return (
		<div className={styles.container}>
			<Head>
				<title>BAKEWELL-WHITE</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/Logo.svg" />
			</Head>
			<section>
				<div className="hero">
					<div className="heroContent flex content-center">
						<div className="heroBG flex content-center">
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
			</section>
			<section>
				<div className="frame2">
					<Image src="/mesh.svg" alt="mesh" layout="fill" objectFit="contain" />
					<div
						ref={scrollRef}
						style={{ overflow: 'scroll' }}
						className="flex flex-col items-center"
					>
						<h2 className="h2 absolute left-0 top-0 h-16 w-23 px-8">
							WE ARE AN AWARD-WINNING
						</h2>

						<h2 className="h2 absolute bottom-0 right-0 h-16 w-16">
							BOUTIQUE DESIGN STUDIO
						</h2>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ root: scrollRef }}
							className="offerPanel p-5"
						>
							<div className="offerContent">
								<h3 className="subheading text-center mb-5">
									We can offer a complete design service to all vessels, power
									and sail. Whether it is conceptual design work or full naval
									architecture and engineering, no job is too big or too small
									for our team.
								</h3>
								<div className="flex flex-row shrink-0">
									<p className="p text-right mr-3 basis-1/2">
										We believe that success is to a large part a matter of
										design process, and a good designer will have a design
										process that will produce a successful outcome whether it be
										a yacht, a powerboat, an aeroplane, or a ballpoint pen.
									</p>
									<p className="p text-left ml-3 basis-1/2">
										We undertake a wide variety of craft from radio yachts, to
										racing yachts, offshore powerboats, to 90m motoryachts,
										pilotboats, kayaks, Arabian dhows, cargo barges and fishing
										boats. As a result we are exposed to a wide variety of
										conditions, design problems and novel solutions, and if we
										were restricted to designing only one type of craft then we
										would not see this rich variety of thinking.
									</p>
								</div>
							</div>
						</motion.div>

						{/* <Image src="/2.png" alt="boat image" width={350} height={150} /> */}

						<motion.div
							whileHover={{ scale: 1.1 }}
							onHoverStart={(e) => {}}
							onHoverEnd={(e) => {}}
							className="buttonContainer my-5 "
						>
							<div className="">
								<a
									className="button flex flex-col justify-center items-center"
									href="#"
								>
									<p>SEE EXPERTISE</p>
									<Image
										src="/Arrow.svg"
										alt="arrow"
										layout="intrinsic"
										width={100}
										height={60}
										objectFit="contain"
									/>
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
			<section>
				<div className="awards">
					<div className="frame3Bg"></div>
					<div className="frame3Content">
						<div className="">
							<h2 className="h1 uppercase">Selected Works</h2>

							<div className="flex-row">
								<ul>
									<li className="h3 opacity-70">
										<span className="caption">[01]</span>CASE STUDY
									</li>
									<li className="h3 opacity-70">
										<span className="caption">[02]</span>CASE STUDY
									</li>
									<li className="h2">
										CASE STUDY
										<p className="p">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Eu in venenatis id laoreet enim. Interdum in orci vitae
											feugiat quam urna. Pretium netus nec ante massa nulla odio
											nunc posuere sit. Nec justo, leo eget ipsum sollicitudin
											aliquet.
										</p>
									</li>
								</ul>
							</div>
							<motion.div
								className="buttonContainer my-5"
								whileHover={{ scale: 1.1 }}
								onHoverStart={(e) => {}}
								onHoverEnd={(e) => {}}
							>
								<div>
									<a
										className="button flex flex-col justify-center items-center"
										href="#"
									>
										<p>See all designs</p>
										<Image
											src="/Arrow.svg"
											alt="arrow"
											layout="intrinsic"
											width={100}
											height={60}
											objectFit="contain"
										/>
									</a>
								</div>
							</motion.div>
							<div className="sailboat">
								<Image
									src="/3.png"
									alt="sailboat"
									layout="intrinsic"
									height={1000}
									width={1000}
									objectFit="contain"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="frame4 bg-color-white text-[#0E1219]">
					<div className="heading1">
						<h2 className="h2">AWARD WINNING-DESIGNS</h2>
					</div>

					<div className="designMesh">
						<Image
							src="/Mesh2.svg"
							alt="mesh"
							layout="responsive"
							width={1000}
							height={1000}
							objectFit="contain"
						/>
					</div>

					<div className="projectContainer">
						<div className="h3 project">
							<ul>
								<li>
									<span className="caption">[01]</span>
									<a>CQS</a>
								</li>
								<li className="p boatType">29m DSS Super-Maxi Race Yatch</li>
							</ul>
							<ul>
								<li>
									<span className="caption">[02]</span>ANARCHY
								</li>
								<li className="p boatType">YD 37.11M Club Racer</li>
							</ul>
							<ul>
								<li>
									<span className="caption">[03]</span>A FORK IN THE ROAD
								</li>
								<li className="p boatType">13.7M IRC Race Yacht</li>
							</ul>
							<ul>
								<li>
									<span className="caption">[04]</span>GENERAL LEE
								</li>
								<li className="p boatType">11.3M IRC Race Yacht</li>
							</ul>
							<ul>
								<li>
									<span className="caption">[05]</span>ZANA/KONICA
									MINOLTA/LAHANA
								</li>
								<li className="p boatType">30m Super-Maxi</li>
							</ul>
							<ul>
								<li>
									<span className="caption">[06]</span>WIRED
								</li>
								<li className="p boatType">
									15.85m Canting Keel Racer/Cruiser
								</li>
							</ul>
							<ul>
								<li>
									<span className="caption">[07]</span>JAZZ PLAYER
								</li>
								<li className="p boatType">
									12m Production One Design Racer / Cruiser
								</li>
							</ul>
							<ul>
								<li>
									<span className="caption">[08]</span>BRAVEHEART/VALKYRIE
								</li>
								<li className="p boatType">15.85m TP52 Carbon Race Yacht</li>
							</ul>
							<ul>
								<li>
									<span className="caption">[09]</span>NZL-403
								</li>
								<li className="p boatType">Mini 650 Carbon Race Yacht</li>
							</ul>
							<ul>
								<li>
									<span className="caption">[10]</span>TIME TO BURN
								</li>
								<li className="p boatType">12.5m Cruiser / Racer</li>
							</ul>

							<a href="#" className="button boatType">
								VIEW MORE
							</a>
						</div>
					</div>
				</div>
			</section>
			<div className="footer">
				<div className="flex flex-row justify-between w-full px-8">
					<ul className="caption">
						<li className="text-left pt-5">
							<a href="#" className="uppercase text-left">
								info@bakewell-white.com
							</a>
						</li>
						<li className="pt-5">
							<a href="#">+64 9 480 6800</a>
						</li>
						<li className="pt-5">
							<a href="#">EST. 1994</a>
						</li>
					</ul>
					<div className="flex flex-col justify-center items-center">
						<h2 className="h2">GET IN TOUCH</h2>
						<motion.div
							whileHover={{ scale: 1.1 }}
							onHoverStart={(e) => {}}
							onHoverEnd={(e) => {}}
							className="buttonContainer my-3 "
						>
							<div className="flex flex-col justify-center items-center">
								<a className="button mt-5">Contact us</a>
								<Image
									src="/Arrow.svg"
									alt="arrow"
									layout="intrinsic"
									width={100}
									height={60}
									objectFit="contain"
								/>
							</div>
						</motion.div>
					</div>
					<ul className="caption ">
						<li className="pt-5 ">
							<a href="#" className="justify-end">
								PRIVACY POLICY
							</a>
						</li>
						<li className="pt-5 ">
							<a href="#" className="justify-end">
								FACEBOOK
							</a>
						</li>
						<li className="pt-5">
							<a href="#" className="justify-end">
								LINKEDIN
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Home
