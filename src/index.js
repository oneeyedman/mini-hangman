import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const DEFAULTWORDS = [
	"rule",
	"left",
	"css",
	"and",
	"comb",
	"this",
	"get",
	"html",
	"api",
	"from"
];
//const ENDPOINT = 'https://api.rand.fun/text/word';

function getRandomNumber(max) {
	return Math.floor(Math.random() * max);
}

function getRandomWord(arr) {
	const total = arr.length;
	const index = getRandomNumber(total);
	return arr[index];
}

class HangMan extends React.Component {
	isActive(limit) {
		const {tries} = this.props;
		let result = '';
		if ( tries >= limit ) {
			result = 'hangman__part--active';
		}

		return result;
	}

	render() {
		const {rope, tries} = this.props;
		return (
			<div className={`app__hangman hangman ${rope ? 'hangman--with-rope':''}`}>
				{rope && <div className={`hangman__rope ${this.isActive(1)}`}></div>}
				<div className={`hangman__body ${this.isActive(2)}`}>
					<div className={`hangman__head ${this.isActive(2)}`}>
						<div className={`hangman__face ${(tries > 0) ? 'hangman__face--sad':''}`}></div>
					</div>
					<div className={`hangman__leg hangman__leg--left ${this.isActive(3)}`}></div>
					<div className={`hangman__leg hangman__leg--right ${this.isActive(4)}`}></div>
				</div>
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalTries: 4,
			tries: 0,
			word: [],
			hiddenWord: [],
			userKey: '',
			userHistory: [],
			gameOver: false
		};
		this.getUserKey = this.getUserKey.bind(this);
	}
	
  componentDidMount() {
		this.startGame();
	}

	startGame() {
		const word = getRandomWord(DEFAULTWORDS).split("");
		const hiddenWord = word.map(letter => '');
		this.setState({
			word: word,
			hiddenWord: hiddenWord
		});
	}

	getUserKey(event) {
		const key = event.currentTarget.value.toLowerCase();
		if (key) {
			this.setState(prevState => {
				const {hiddenWord, userHistory, word, totalTries} = prevState;
				let {tries, gameOver} = prevState;
				const newHistory = [...userHistory];
				const newHiddenWord = [...hiddenWord]
				if (word.includes(key)) {
					for (let i=0;i<word.length;i++) {
						if (word[i] === key) {
							newHiddenWord[i] = key;
						}
					}
				} else {
					if (tries < totalTries) {
						tries++;
						if (tries === totalTries) {
							gameOver = true;
						}
					}

				}
				newHistory.push(key);
				return {
					tries: tries,
					hiddenWord: newHiddenWord,
					userKey: key,
					userHistory: newHistory,
					gameOver: gameOver
				}
			}, ()=>{
				setTimeout(()=>{
					this.setState({
						userKey: ''
					});
				}, 500);
			});
		}
	}

	emptyField(event) {
		event.currentTarget.value = '';
	}

	render() {
		const {tries, userKey} = this.state;
		return (
			<React.Fragment>
				<HangMan rope={true} tries={tries} />
				<div className="app__ui">
					<div className="app__word">
						{this.state.hiddenWord.map((item, index) => {
							return (
								<div key={index} className={`app__letter ${(item) ? 'app__letter--ok':''}`}>
									{item}
								</div>
							);
						})}
					</div>
					<div className="app__user">
						<div className="app__user-field">
							<input className="app__user-letter" type="text" onChange={this.getUserKey} onClick={this.emptyField} maxLength="1" value={userKey}/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("area"));

