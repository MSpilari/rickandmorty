import styled, { keyframes } from 'styled-components'

const AnimationZoom = keyframes`
	from{
		transform: scale(0.9)
	}
	to{
		transform: scale(1.0)
	}
`

export const CardWrapper = styled.div`
	border: solid 3px #00ff00;
	border-radius: 8px;

	width: 95%;
	max-width: 350px;
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 8px 16px;

	img {
		border-radius: 50%;
		width: 50vw;
		max-width: 300px;
		&:hover {
			animation: ${AnimationZoom} 2s linear;
		}
	}

	h4 {
		font-size: 20px;
		text-align: center;
	}

	@media (min-width: 768px) {
		height: 550px;
	}
`

export const CardTitle = styled.h1`
	margin: 0;
	text-align: center;
`
