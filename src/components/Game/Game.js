import React, { useState } from 'react'
import TextInput from '../TextInput/TextInput'
import GuessResults from '../GuessResults/GuessResults'
import { sample } from '../../utils'
import { WORDS } from '../../data'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import WonBanner from '../WonBanner/WonBanner'
import LostBanner from '../LostBanner/LostBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
	const [guesses, setGuesses] = useState([])
	const [gameStatus, setGameStatus] = useState('running')

	function handleGuessSubmit(tentativeGuess) {
		const nextGuesses = [...guesses, tentativeGuess]
		setGuesses(nextGuesses)

		if (tentativeGuess.toUpperCase() === answer) {
			setGameStatus('won')
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lost')
		}
	}
	return (
		<>
			<GuessResults guesses={guesses} answer={answer} />
			<TextInput
				handleGuessSubmit={handleGuessSubmit}
				gameStatus={gameStatus}
			/>
			{gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
			{gameStatus === 'lost' && <LostBanner answer={answer} />}
		</>
	)
}

export default Game
