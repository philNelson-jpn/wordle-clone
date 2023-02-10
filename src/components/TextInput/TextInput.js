import React, { useState } from 'react'

function TextInput({ handleGuessSubmit }) {
	const [tentativeGuess, setTentativeGuess] = useState('')

	function handleSubmit(event) {
		event.preventDefault()

		if (tentativeGuess.length !== 5) {
			window.alert('Please enter exactly 5 characters')
			return
		}

		handleGuessSubmit(tentativeGuess)

		setTentativeGuess('')
	}

	return (
		<>
			<form onSubmit={handleSubmit} className='guess-input-wrapper'>
				<label htmlFor='guess-input'>Enter guess:</label>
				<input
					required
					id='guess-input'
					type='text'
					minLength={5}
					maxLength={5}
					value={tentativeGuess}
					onChange={(event) => {
						const nextGuess = event.target.value.toUpperCase()
						setTentativeGuess(nextGuess)
					}}
				/>
			</form>
		</>
	)
}

export default TextInput
