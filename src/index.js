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

const HangMan = props => {
	const {rope} = props;
	return (
		<div className={`app__hangman hangman ${rope ? 'hangman--with-rope':''}`}>
			{rope && <div className="hangman__rope"></div>}
      <div className="hangman__body">
        <div className="hangman__head">
          <div className="hangman__face hangman__face--sad"></div>
        </div>
        <div className="hangman__leg hangman__leg--left"></div>
        <div className="hangman__leg hangman__leg--right"></div>
      </div>
		</div>
	);
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tries: 0,
			word: [],
			hiddenWord: [],
			userKey: '',
			userHistory: []
		};
		this.getUserKey = this.getUserKey.bind(this);
	}
	
  componentDidMount() {
		this.startGame();
	}

	startGame() {
		const word = getRandomWord(DEFAULTWORDS).split("");
		const hiddenWord = word.map(letter => letter);
		this.setState({
			word: word,
			hiddenWord: hiddenWord
		});
	}

	getUserKey(event) {
		const key = event.currentTarget.value;
		
		if (key) {
			this.setState(prevState => {
				const newHistory = [...prevState.userHistory];
				newHistory.push(key);
				return {
					userKey: key,
					userHistory: newHistory
				}
			});
		}
	}

	emptyField(event) {
		event.currentTarget.value = '';
	}

	render() {
		return (
			<React.Fragment>
				<HangMan rope={true} />
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
							<input className="app__user-letter" type="text" onChange={this.getUserKey} onClick={this.emptyField}maxLength="1"/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("area"));

