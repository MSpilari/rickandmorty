import styled, { keyframes } from 'styled-components'

const upNDown = keyframes`
    0%{
        transform: translateY(0px)
    }
    25%{
        transform: translateY(-20px)
    }
    50%{
        transform: translateY(0px)
    }
    75%{
        transform: translateY(20px)
    }
    100%{
        transform: translateY(0px)
    }
`

export const WelcomeWrapper = styled.div`
	width: 90%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		animation: ${upNDown} 3s linear infinite;
	}
`
