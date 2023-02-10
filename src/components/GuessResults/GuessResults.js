import React from 'react'

function GuessResults({ guesses }) {
	return (
		<div className='guess-results'>
			{guesses.map((guess, index) => (
				<p key={index} className='guess'>
					{guess.toUpperCase()}
				</p>
			))}
		</div>
	)
}

export default GuessResults
