import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const Expertise = () => {
	const cardVariants: Variants = {
		offscreen: {
			y: 300,
		},
		onscreen: {
			y: 0,
			transition: {
				type: 'spring',
				bounce: 0.6,
				duration: 0.8,
			},
		},
	}

	return (
		<div>
			<div className="frame2 relative h-32 w-32 ...">
				<div className="bgMesh"></div>
				<motion.div
					className="flex flex-col items-center"
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.8 }}
				>
					<div className="awardTitle1 text-left max-w-md">
						<h2 className="h1 absolute left-20 top-10 h-16 z-10 text-left max-w-3xl">
							WE ARE AN AWARD-WINNING
						</h2>
					</div>
					<div className="awardTitle2">
						<h2 className="h1 absolute right-20 bottom-40 h-16 z-20 text-right max-w-2xl">
							BOUTIQUE DESIGN STUDIO
						</h2>
					</div>
					<motion.div className="offerPanel p-5" variants={cardVariants}>
						<motion.div className="offerContent">
							<h3 className="subheading text-center mb-5">
								We can offer a complete design service to all vessels, power and
								sail. Whether it is conceptual design work or full naval
								architecture and engineering, no job is too big or too small for
								our team.
							</h3>
							<div className="flex flex-row shrink-0">
								<p className="p text-right mr-3 basis-1/2">
									We believe that success is to a large part a matter of design
									process, and a good designer will have a design process that
									will produce a successful outcome whether it be a yacht, a
									powerboat, an aeroplane, or a ballpoint pen.
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
						</motion.div>
					</motion.div>

					{/* <Image src="/2.png" alt="boat image" width={350} height={150} /> */}

					<motion.div
						whileHover={{ scale: 1.1 }}
						onHoverStart={(e) => {}}
						onHoverEnd={(e) => {}}
						className="buttonContainer my-5 absolute inset-y-80 right-20 w-16 top-50"
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
									height={16}
									objectFit="contain"
								/>
							</a>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}

export default Expertise
