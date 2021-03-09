import Container from "../../components/Container";
import ResultSection from "../../components/ResultSection";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { QUIZZES } from "../../constants";

interface ResultProps {
	score: number;
	setScore: React.Dispatch<React.SetStateAction<number>>;
}

const Result = ({ score, setScore }: ResultProps) => {
	const convertedScore = Math.floor((score / QUIZZES.length) * 100);
	return (
		<Container>
			<ResultSection convertedScore={convertedScore}></ResultSection>
			<Link to="/">
				<Button text="테스트 다시하기" onClick={() => setScore(0)}></Button>
			</Link>
		</Container>
	);
};

export default Result;
