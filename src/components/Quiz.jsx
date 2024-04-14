import { useState } from "react";

import QUESTIONS from "../questions";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers(prevAnswers => [...prevAnswers, selectedAnswer]);
    }

    return (
        <div id="quiz">
            <div id="question">
                <p>{QUESTIONS[activeQuestionIndex].text}</p>
                <ul id="answers">
                    {QUESTIONS[activeQuestionIndex].answers.map(answer => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
