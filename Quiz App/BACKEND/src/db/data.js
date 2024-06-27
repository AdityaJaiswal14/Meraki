const quizzes = [
    {
        "quizId": 1,
        "title": "JavaScript",
        "questions": [
            {
                "id": 1,
                "question": "Which type of language is JavaScript?",
                "options": [
                    "Object-Oriented",
                    "Object-Based",
                    "Assembly-language",
                    "High-level"
                ]
            },
            {
                "id": 2,
                "question": "In JavaScript, what is a block of statement?",
                "options": [
                    "Conditional block",
                    "Block that combines a number of statements into a single compound statement",
                    "Both conditional block and a single statement",
                    "Block that contains a single statement"
                ]
            },
            {
                "id": 3,
                "question": "The 'function' and 'var' are known as:",
                "options": [
                    "Keywords",
                    "Data types",
                    "Declaration statements",
                    "Prototypes"
                ]
            },
            {
                "id": 4,
                "question": "Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
                "options": [
                    "slice()",
                    "split()",
                    "substr()",
                    "search()"
                ]
            },
            {
                "id": 5,
                "question": "In JavaScript the x===y statement implies that:",
                "options": [
                    "Both x and y are equal in value, type and reference address as well.",
                    "Both are x and y are equal in value only.",
                    "Both are equal in the value and data type.",
                    "Both are not same at all."
                ]
            }
        ],
        "answers": [1, 1, 2, 2, 2]
    },
    {
        "quizId": 2,
        "title": "React.js",
        "questions": [
            {
                "id": 1,
                "question": "What of the following is used in React.js to increase performance?",
                "options": [
                    "Original DOM",
                    "Virtual DOM",
                    "Both A and B",
                    "None of the above"
                ]
            },
            {
                "id": 2,
                "question": "Which of the following acts as the input of a class-based component?",
                "options": [
                    "Class",
                    "Factory",
                    "Render",
                    "Props"
                ]
            },
            {
                "id": 3,
                "question": "How many numbers of elements a valid react component can return?",
                "options": [
                    "1",
                    "2",
                    "4",
                    "5"
                ]
            },
            {
                "id": 4,
                "question": "What is the declarative way to render a dynamic list of components based on values in an array?",
                "options": [
                    "Using the reduce array method",
                    "Using the <Each /> component",
                    "Using the Array.map() method",
                    "With a for/while loop"
                ]
            },
            {
                "id": 5,
                "question": "What is a state in React?",
                "options": [
                    "A permanent storage",
                    "Internal storage of the component",
                    "External storage of the component",
                    "None of the above"
                ]
            }
        ],
        "answers": [1, 3, 0, 2, 1]
    }
];

export default quizzes;