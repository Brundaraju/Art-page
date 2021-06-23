import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ImageModal from './ImageModal'
import ocean from '../img/ocean.jpg'
import paradise from '../img/paradise.jpg'
import rain from '../img/rain.jpg'
import shore from '../img/shore.jpg'
import sunset from '../img/sunset.jpg'
import waterfall from '../img/waterfall.jpg'
import wave from '../img/wave.jpg'


const Art = () => {
	const[one, setOne] = useState(false)
	const handleOne = () => setOne(true)
	const handleNoOne = () => setOne(false)

	const[two, setTwo] = useState(false)
	const handleTwo = () => setTwo(true)
	const handleNoTwo = () => setTwo(false)

	const[three, setThree] = useState(false)
	const handleThree = () => setThree(true)
	const handleNoThree = () => setThree(false)

	const[four, setFour] = useState(false)
	const handleFour = () => setFour(true)
	const handleNoFour = () => setFour(false)

	const[five, setFive] = useState(false)
	const handleFive = () => setFive(true)
	const handleNoFive = () => setFive(false)

	const[six, setSix] = useState(false)
	const handleSix = () => setSix(true)
	const handleNoSix = () => setSix(false)

	const[seven, setSeven] = useState(false)
	const handleSeven = () => setSeven(true)
	const handleNoSeven = () => setSeven(false)


	return (
		<center className="Art">
			<Container fluid>
				<article className="Image-Container">
					<img src={ocean} alt="ocean" onClick={handleOne}/>
					<ImageModal id="one" src={ocean} show={one} Close={handleNoOne}/>
				</article>

				<article className="Image-Container">
					<img src={paradise} alt="paradise" onClick={handleTwo}/>
					<ImageModal id="two" src={paradise} show={two} Close={handleNoTwo}/>
				</article>

				<article className="Image-Container">
					<img src={rain} alt="rain" onClick={handleThree}/>
					<ImageModal id="three" src={rain} show={three} Close={handleNoThree}/>
				</article>

				<article className="Image-Container">
					<img src={shore} alt="shore" onClick={handleFour}/>
					<ImageModal id="four" src={shore} show={four} Close={handleNoFour}/>
				</article>
			
				<article className="Image-Container">
					<img src={sunset} alt="sunset" onClick={handleFive}/>
					<ImageModal id="five" src={sunset} show={five} Close={handleNoFive}/>
				</article>

				<article className="Image-Container">
					<img src={waterfall} alt="waterfall" onClick={handleSix}/>
					<ImageModal id="six" src={waterfall} show={six} Close={handleNoSix}/>
				</article>

				<article className="Image-Container">
					<img src={wave} alt="wave" onClick={handleSeven}/>
					<ImageModal id="seven" src={wave} show={seven} Close={handleNoSeven}/>
				</article>
			</Container>
		</center>
	)
}

export default Art;