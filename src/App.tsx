import { useState } from "react";
import "./App.css";
import AnswerGroup from "./components/AnswerGroup";
import QuestionSection from "./components/QuestionSection";
import ResultSection from "./components/ResultSection";
import { QUIZZES } from "./constants";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

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
		<ThemeProvider theme={theme}>
			<div className="container">
				{showResult ? (
					<div className="app">
						<ResultSection convertedScore={convertedScore} />
					</div>
				) : (
					<div className="app">
						<QuestionSection currentNo={currentNo} />
						<AnswerGroup currentNo={currentNo} handleClick={handleClick} />
					</div>
				)}
			</div>
		</ThemeProvider>
	);
}

export default App;
