import styled from 'styled-components'

export const CharactersWrapper = styled.div`
	width: 90%;
	margin: 20px auto;

	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		margin: 10px;
		color: #00ff00;
	}

	ul {
		width: 95%;
		margin: 0 auto;

		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		justify-content: center;

		grid-gap: 8px;

		list-style: none;

		li {
			width: 100%;
		}
	}
	@media (min-width: 768px) and (max-width: 1440px) {
		ul {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (min-width: 1440px) {
		ul {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
`
