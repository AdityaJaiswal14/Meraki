import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEllipsis, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function QuizCard({ quiz }) {
    return (
        <div className="rounded-[10px] flex flex-col gap-2 border border-gray-300 bg-white p-4">
            <div className="relative bg-green-700 w-full h-32 w-32 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                    className="text-white"
                    height={80}
                    width={80}
                    icon={faCode}
                />
            </div>
            <h3 className="font-bold">{quiz.title}</h3>
            <p className="text-sm font-light">{quiz.questions.length} Questions</p>
            <div className="flex gap-3">
            </div>
            <div className="rounded-full w-7 h-7 bg-green-700 flex items-center justify-center">
            <Link to={`/quiz/${quiz.quizId}`}>
                <FontAwesomeIcon
                    className="text-white"
                    width={15}
                    height={15}
                    icon={faPlay}
                />
            </Link>
            </div>
        </div>
    );
}

export default QuizCard;