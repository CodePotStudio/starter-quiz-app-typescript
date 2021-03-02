import { useState } from "react";
import "./App.css";
import AnswerGroup from "./components/AnswerGroup";
import QUIZZES from "./constants";

function App() {
	const [currentNo, setCurrentNo] = useState<number>(0);
	const [showResult, setShowResult] = useState<boolean>(false);
	const [score, setScore] = useState<number>(0);

	const handleClick = (isCorrect: boolean) => {
		if (isCorrect) {
			setScore((score) => score + 1);
		}
		// 마지막 퀴즈인지 체크하기
		if (currentNo === QUIZZES.length - 1) {
			setShowResult(true);
		} else {
			setCurrentNo((currentNo) => currentNo + 1);
		}
	};

	const convertedScore = Math.floor((score / QUIZZES.length) * 100);

	return (
		<div className="container">
			{showResult ? (
				<div className="app">
					<h1 className="result-header">당신의 점수는?</h1>
					<p className="result-score">{convertedScore}</p>
				</div>
			) : (
				<div className="app">
					<div className="question-section">
						<h1 className="question-header">
							<span>{QUIZZES[currentNo].id}</span>/{QUIZZES.length}
						</h1>
						<div className="question-text">{QUIZZES[currentNo].question}</div>
					</div>
					<AnswerGroup currentNo={currentNo} handleClick={handleClick} />
				</div>
			)}
		</div>
	);
}

export default App;
