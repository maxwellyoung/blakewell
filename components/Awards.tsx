import React, { useRef, useState, useLayoutEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion, Variants } from 'framer-motion'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const Awards = () => {
	return (
		<div>
			<div className="awards bg-color-white text-[#0E1219] relative">
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
								<span className="caption">[05]</span>ZANA/KONICA MINOLTA/LAHANA
							</li>
							<li className="p boatType">30m Super-Maxi</li>
						</ul>
						<ul>
							<li>
								<span className="caption">[06]</span>WIRED
							</li>
							<li className="p boatType">15.85m Canting Keel Racer/Cruiser</li>
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
		</div>
	)
}

export default Awards
