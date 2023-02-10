import React, { useState } from 'react'
import TextInput from '../TextInput/TextInput'
import GuessResults from '../GuessResults/GuessResults'
import { sample } from '../../utils'
import { WORDS } from '../../data'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
	const [guesses, setGuesses] = useState([])

	function handleGuessSubmit(tentativeGuess) {
		setGuesses([...guesses, tentativeGuess])
	}
	return (
		<>
			<GuessResults guesses={guesses} answer={answer} />
			<TextInput handleGuessSubmit={handleGuessSubmit} />
		</>
	)
}

export default Game
