import React, { useState } from 'react'

function TextInput() {
	const [guess, setGuess] = useState('')

	function handleSubmit(event) {
		event.preventDefault()
		console.log(guess)
		setGuess('')
	}
	return (
		<form onSubmit={handleSubmit} className='guess-input-wrapper'>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				required
				style={{ textTransform: 'uppercase' }}
				id='guess-input'
				type='text'
				minLength={5}
				maxLength={5}
				value={guess}
				onChange={(event) => {
					setGuess(event.target.value)
				}}
			/>
		</form>
	)
}

export default TextInput
