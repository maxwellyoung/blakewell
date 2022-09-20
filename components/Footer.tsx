import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Footer = () => {
	return (
		<div>
			<div className="flex flex-row justify-between w-full px-8">
				<ul className="caption">
					<li className="text-left pt-5">
						<a href="#" className="text-left">
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
				<div className="flex flex-col justify-center items-center h-max">
					<h2 className="h2  mb-4">GET IN TOUCH</h2>
					<motion.div
						className="buttonContainer"
						whileHover={{ scale: 1.1 }}
						onHoverStart={(e) => {}}
						onHoverEnd={(e) => {}}
					>
						<div>
							<a
								className="button flex flex-col justify-center items-center"
								href="#"
							>
								<p>Contact us</p>
								<Image
									src="/Arrow.svg"
									alt="arrow"
									layout="intrinsic"
									width={100}
									height={16}
									objectFit="contain"
								/>
							</a>
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
	)
}

export default Footer
