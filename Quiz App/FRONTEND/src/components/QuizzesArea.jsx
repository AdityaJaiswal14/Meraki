import React, { useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import { getServerData } from "../helper/helper";

function QuizzesArea() {
    const [quizzes, setQuizzes] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchQuizzes() {
            try {
                const data = await getServerData("http://localhost:5000/api/quizzes");
                console.log("Fetched data: ", data);
                setQuizzes(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchQuizzes();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="poppins mx-12 mt-10">
            <h2 className="text-xl font-bold">My Quizzes</h2>
            <div className="mt-6 flex gap-2 flex-wrap">
                {quizzes.map((quiz) => (
                    <QuizCard key={quiz.id} quiz={quiz} />
                ))}
            </div>
        </div>
    );
}

export default QuizzesArea;