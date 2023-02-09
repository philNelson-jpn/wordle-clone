import React, { useState } from 'react'
import TextInput from '../TextInput/TextInput'

function GuessResults() {
	const [guessResults, setGuessResults] = useState()
	function handleAddGuess(label) {
		const newGuess = {
			label,
			id: Math.random(),
		}

		const nextGuess = [...guessResults, newGuess]
		setGuessResults(nextGuess)
	}
	return (
		<div class='guess-results'>
			{guessResults.map(({ id, label }) => (
				<p key={id} className='guess'>
					{label}
				</p>
			))}

			<TextInput handleAddGuess={handleAddGuess} />
		</div>
	)
}

export default GuessResults
