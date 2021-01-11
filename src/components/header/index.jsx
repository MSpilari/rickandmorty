import React from 'react'
import Logo from '../../assets/ricklogo.png'

import { MyHeader } from './style'

const Header = () => {
	return (
		<MyHeader>
			<a
				target='_blank'
				rel='noreferrer'
				href='https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/'
			>
				Linkedin
			</a>
			<img src={Logo} alt='Logo' />
			<a target='_blank' rel='noreferrer' href='https://github.com/MSpilari'>
				Github
			</a>
		</MyHeader>
	)
}

export default Header
