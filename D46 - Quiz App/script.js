const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

// Bringing the quiz data
async function getData() {
	const res = await fetch('https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple');

	const questions = await res.json();

	return questions;
}

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();

	getData().then((results) => {
		const quizData = results.results;
		// Defining initial variables
		const currentQuizData = quizData[currentQuiz];
		questionEl.innerText = currentQuizData.question;
		const answers = [currentQuizData.correct_answer];
		currentQuizData.incorrect_answers.forEach((answer) => {
			answers.push(answer);
		});

		shuffle(answers);

		a_text.innerText = answers[0];
		b_text.innerText = answers[1];
		c_text.innerText = answers[2];
		d_text.innerText = answers[3];

		submitBtn.addEventListener('click', () => {
			const answer = getSelected();
			// console.log(answer);
			if (answer) {
				console.log(answer);
				if (answer === currentQuizData.correct_answer) {
					console.log(answer);
					console.log(currentQuizData.correct_answer);
					score++;
				} else {
					console.log(answer);
					console.log(currentQuizData.correct_answer);
				}

				currentQuiz++;
				if (currentQuiz < quizData.length) {
					loadQuiz();
				} else {
					quiz.innerHTML = `
                        <h2> You answered correctly at ${score}/${quizData.length} questions </h2>

                        <button onclick="location.reload()">Reload</button>
            `;
				}
			}
		});
	});
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
	let answer;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.nextElementSibling.innerText;
			console.log(answerEl.nextElementSibling.innerText);
		}
	});

	return answer;
}

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}

	return array;
}
