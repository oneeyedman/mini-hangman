import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const version = 'v0.9.0';

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

const Word = props => {
	const {hiddenWord} = props;
	return (
		<ol className="app__word">
			{hiddenWord.map((item, index) => {
				return (
					<li key={index} className={`app__letter ${(item) ? 'app__letter--ok':''}`}>
						{item}
					</li>
				);
			})}
		</ol>
	);
};

const UserControls = props => {
	const {getUserKey, handleFieldClick, userKey, gameOver} = props;
	return (
		<div className="app__user">
			<div className="app__user-field">
				<input
					className="app__user-letter" 
					type="text" 
					onChange={getUserKey} 
					onClick={handleFieldClick} 
					maxLength="1" 
					value={userKey}
					disabled={gameOver}
				/>
			</div>
		</div>
	);
};

const GameScreen = props => {
	const {page, index, tries, hiddenWord, getUserKey, handleFieldClick, userKey, gameOver} = props;
	return (
		<div className={`app__screen app__screen--game ${(page === index) ? 'app__screen--active': ''}`}>
			<HangMan rope={true} tries={tries} />
			<div className="app__ui">
				<Word
					hiddenWord={hiddenWord}
				/>
				
				<UserControls 
					getUserKey={getUserKey}
					handleFieldClick={handleFieldClick}
					userKey={userKey}
					gameOver={gameOver}
				/>
			</div>
		</div>
	);
};

const Screen = props => {
	const {page, index, text, className, action} = props;
	return (
		<div className={`${className} ${(page === index) ? 'app__screen--active': ''}`} onClick={action}>{text}</div>
	);
};

const SplashScreen = props => {
	const {page, index, action} = props;
	return (
		<div className={`app__screen app__screen--splash ${(page === index) ? 'app__screen--active': ''}`}>
			<h1 className="app__title">Mini Hangman</h1>
			<div className="app__version">{version}</div>
			<button className="app__button app__play" onClick={()=>{action(1)}}>Play</button>
		</div>
	);
};

class OkScreen extends React.Component {
	render() {
		const {page, index, action, word} = this.props;
		return (
			<div className={`app__screen app__screen--ok ${(page === index) ? 'app__screen--active': ''}`}>
				<HangMan rope={true} tries={4} />
				<div className="app__result">Word: {word.join('')}</div>
				<button className="app__button app__play" onClick={()=>{action(1)}} data-next={1}>Play Again</button>
			</div>
		);
	}
};

class KoScreen extends React.Component {
	render() {
		const {page, index, action, word} = this.props;
		return (
			<div className={`app__screen app__screen--ko ${(page === index) ? 'app__screen--active': ''}`}>
				<HangMan rope={false} tries={4} />
				<h2 className="app__screen-title">Loser!</h2>
				<div className="app__result">Word: {word.join('')}</div>
				<button className="app__button app__play" onClick={()=>{action(1)}} data-next={1}>Play Again</button>
			</div>
		);
	}
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 2,
			totalTries: 4,
			lettersLeft: 0,
			tries: 0,
			word: [],
			hiddenWord: [],
			userKey: '',
			userHistory: [],
			gameOver: false
		};
		this.getUserKey = this.getUserKey.bind(this);
		this.gotoScreen = this.gotoScreen.bind(this);
		this.resetGame = this.resetGame.bind(this);
	}

  componentDidMount() {
		this.startGame();
	}
	
	resetGame() {
		this.setState({
			page: 1,
			tries: 0,
			lettersLeft: 0,
			userKey: '',
			userHistory: [],
			gameOver: false
		}, () => {
			this.startGame();
		});
	}

	gotoScreen(index) {
		this.setState({
			page: index
		});
	}

	startGame() {
		const word = getRandomWord(DEFAULTWORDS).split("");
		const hiddenWord = word.map(letter => '');
		const totalLetters = word.length;
		this.setState({
			word: word,
			hiddenWord: hiddenWord,
			lettersLeft: totalLetters
		});
	}

	getUserKey(event) {
		const key = event.currentTarget.value.toLowerCase();
		if (key) {
			this.setState(prevState => {
				const {hiddenWord, userHistory, word, totalTries} = prevState;
				let {tries, gameOver, lettersLeft} = prevState;
				const newHistory = [...userHistory];
				const newHiddenWord = [...hiddenWord]
				if (word.includes(key)) {
					for (let i=0;i<word.length;i++) {
						if (word[i] === key) {
							newHiddenWord[i] = key;
							lettersLeft--;
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
				if (gameOver) {
					setTimeout(()=>{
						this.setState({page: 3});
					}, 1000);
				}
				if (lettersLeft === 0) {
					setTimeout(()=>{
						this.setState({page: 2});
					}, 1000);
				}
				return {
					tries: tries,
					hiddenWord: newHiddenWord,
					userKey: key,
					userHistory: newHistory,
					gameOver: gameOver,
					lettersLeft: lettersLeft
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
		const {tries, userKey, hiddenWord, page, gameOver, word} = this.state;
		return (
			<React.Fragment>
				<SplashScreen 
					page={page}
					index={0}
					action={this.gotoScreen}
				/>
				<GameScreen
					page={page}
					index={1}
					tries={tries}
					hiddenWord={hiddenWord}
					userKey={userKey}
					handleFieldClick={this.emptyField}
					getUserKey={this.getUserKey}
					gameOver={gameOver}
				/>
				<OkScreen 
					page={page}
					index={2}
					word={word}
					action={this.resetGame}
				/>
				<KoScreen 
					page={page}
					index={3}
					word={word}
					action={this.resetGame}
				/>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("area"));

