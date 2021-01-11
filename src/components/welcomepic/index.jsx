import React from 'react'
import welcomePic from '../../assets/welcomephoto.png'

import { WelcomeWrapper } from './style'

const WelcomePic = () => {
	return (
		<WelcomeWrapper>
			<img src={welcomePic} alt='welcome' />
		</WelcomeWrapper>
	)
}

export default WelcomePic
