import { useEffect, useState } from 'react'
import { CharactersWrapper } from './style'

import MyButton from '../button'
import Card from '../card'
function Info() {
	const [characters, setCharacters] = useState([])
	const [page, setPage] = useState(6)

	function fetchingCharacters(idChars) {
		fetch(`https://rickandmortyapi.com/api/character/${idChars}`)
			.then(response => response.json())
			.then(data => setCharacters(data))
	}
	function Pagination(pageNumber, event) {
		let arr = []
		const clickedButton = event.target.innerHTML

		if (clickedButton === 'Previous' && page > 6) {
			for (let a = pageNumber - 6; a >= pageNumber - 10; a--) {
				arr.push(a)
			}
			setPage(page - 5)
			return fetchingCharacters(arr.reverse().toString())
		}
		if (clickedButton === 'Next') {
			for (let a = pageNumber; a <= pageNumber + 4; a++) {
				arr.push(a)
			}
			setPage(page + 5)
			return fetchingCharacters(arr.toString())
		}
		return
	}

	useEffect(() => {
		fetchingCharacters('1, 2, 3, 4, 5')
	}, [])

	return (
		<CharactersWrapper>
			<h1>All Characters</h1>
			<div>
				<MyButton mylabel='Previous' onClick={e => Pagination(page, e)} />
				<MyButton mylabel='Next' onClick={e => Pagination(page, e)} />
			</div>

			<ul>
				{characters.map(char => {
					return (
						<li key={char.id}>
							<Card info={char} />
						</li>
					)
				})}
			</ul>
		</CharactersWrapper>
	)
}

export default Info
