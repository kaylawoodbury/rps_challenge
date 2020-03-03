import Chance from 'chance'

const computer = () => {
	let chance = new Chance()
	let choice = chance.pickone(['rock', 'paper', 'scissors'])
	return choice
}

const winner = (player1, player2) => {

	let result
	switch ([player1, player2].join()) {
		case ['rock', 'scissors'].join():
		case ['scissors', 'paper'].join():
		case ['paper', 'rock'].join():
			result = 'Congratulations, you win!'
			break
		case ['scissors', 'rock'].join():
		case ['paper', 'scissors'].join():
		case ['rock', 'paper'].join():
			result = 'Better luck next time.'
			break
		default:
			result = "It's a tie. Try again!"
			break
	}

	return result
}


export { computer, winner }