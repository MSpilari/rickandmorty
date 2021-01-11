import React from 'react'

import { Button } from './style'

const MyButton = ({ mylabel, ...rest }) => {
	return <Button {...rest}>{mylabel}</Button>
}

export default MyButton
