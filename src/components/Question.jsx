import { useState } from "react";

import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

import QUESTIONS from "../questions";

export default function Question({ idx, onSelectAnswer, onSkipAnswer }) {
    const [answer, setAnswer] = useState({ selectedAnswer: "", isCorrect: null });

    let timer = 10000;

    if (answer.selectedAnswer) timer = 1000;

    if (answer.isCorrect !== null) timer = 2000;

    function handleSelectAnswer(answer) {
        setAnswer({ selectedAnswer: answer, isCorrect: null });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[idx].answers[0] === answer,
            });

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    }

    let answerState = "";

    if (answer.selectedAnswer && answer.isCorrect !== null) answerState = answer.isCorrect ? "correct" : "incorrect";
    else if (answer.selectedAnswer) answerState = "answered";

    return (
        <div id="question">
            <QuestionTimer
                key={timer}
                timeout={timer}
                onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
                mode={answerState}
            />
            <p>{QUESTIONS[idx].text}</p>
            <Answers
                answers={QUESTIONS[idx].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}
