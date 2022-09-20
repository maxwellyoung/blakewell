import React, { useState } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const Works = () => {
	const Cases = {
		case1: {
			img: `/1.png`,
			text: 'Case 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum, ex ut rutrum posuere, metus lacus blandit metus, vel facilisis mauris urna a ex. Nam aliquam porta ornare. Fusce id velit leo. Integer sodales, libero et cursus pharetra, purus quam hendrerit massa, quis euismod ligula magna vel velit. Cras efficitur imperdiet ligula, in posuere erat ultricies vitae. Suspendisse ut ligula malesuada, luctus magna eu, rutrum tellus. Vivamus tortor metus, lacinia sit amet tincidunt accumsan, auctor sed neque. Etiam feugiat sed leo sit amet euismod. Donec orci diam, faucibus nec libero a, luctus tincidunt dolor. Ut ut elit dui. Nunc pharetra vehicula rutrum.',
		},
		case2: {
			img: `/2.png`,
			text: 'Case 2. Etiam justo lectus, faucibus a sapien eget, efficitur iaculis risus. Donec varius sagittis sem ut facilisis. Curabitur laoreet ornare placerat. Nullam pharetra at purus vel hendrerit. In hac habitasse platea dictumst. Mauris non laoreet orci. Morbi lorem ligula, efficitur vel sem in, euismod luctus nibh. Fusce non nisl vitae mi tincidunt malesuada. Morbi cursus diam quis diam varius condimentum. Proin accumsan justo non magna condimentum tincidunt. Curabitur auctor, sapien nec tempus euismod, nulla arcu vulputate tortor, sed tristique lacus purus id leo. Ut ut ultrices nisl.',
		},
		case3: {
			img: '/3.png',
			text: 'Case 3. Nullam eget ex pellentesque, interdum odio ut, porta sapien. Nullam et auctor eros. Curabitur molestie, nisi at ultrices convallis, lectus arcu vehicula ante, vitae dignissim risus mi ut lacus. Mauris placerat, nisi ac finibus consequat, ipsum nulla viverra risus, id tristique nisi nisi nec nisl. Nulla elit leo, hendrerit pellentesque vehicula vel, pretium in ligula. Fusce venenatis consectetur lectus id consectetur. Nulla interdum arcu eu dapibus iaculis.',
		},
	}

	const [selectedCase, setSelectedCase] = useState(Cases.case1)

	const cardVariants: Variants = {
		offscreen: {
			x: 1000,
		},
		onscreen: {
			x: 0,
			transition: {
				type: 'spring',
				bounce: 0.3,
				duration: 0.8,
			},
		},
	}

	return (
		<div>
			<div className="works">
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.8 }}
				>
					<div className="frame3Content">
						<h2 className="h1 uppercase">Selected Works</h2>
						<div className="flex-row">
							<ul className="cursor-pointer">
								<motion.li
									className="h3 opacity-70 flex flex-row"
									onClick={() => setSelectedCase(Cases.case1)}
									whileHover={{}}
								>
									<span className="caption mr-1">[01]</span>CASE STUDY
								</motion.li>
								<li
									className="h3 opacity-70 flex flex-row"
									onClick={() => setSelectedCase(Cases.case2)}
								>
									<span className="caption mr-1">[02]</span>CASE STUDY
								</li>
								<li
									className="h2 flex flex-row"
									onClick={() => setSelectedCase(Cases.case3)}
								>
									<span className="caption  mr-1">[03]</span>CASE STUDY
								</li>
								<p className="p">{selectedCase.text}</p>
							</ul>
						</div>
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
									<p>See all designs</p>
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

					<motion.div className="sailboat" variants={cardVariants}>
						<Image
							src={selectedCase.img}
							id="sailImage"
							alt="sailboat"
							layout="responsive"
							height={1000}
							width={1000}
							objectFit="contain"
						/>
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}

export default Works
