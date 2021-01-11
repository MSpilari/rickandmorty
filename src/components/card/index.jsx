import React from 'react'
import { CardWrapper, CardTitle } from './style'

const Card = ({ info }) => {
	return (
		<CardWrapper>
			<img src={info.image} alt='CardPhoto' />
			<CardTitle>{info.name}</CardTitle>
			<h4>Status: {info.status}</h4>
			<h4>Species: {info.species}</h4>
			<h4>Gender: {info.gender}</h4>
			<h4>Origin: {info.origin.name}</h4>
		</CardWrapper>
	)
}

export default Card
