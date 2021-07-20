const exercises = [
    {
        id: 1,
        title: 'Choose the right answer',
        text: 'Description',
        items: [
            {
                id: 1,
                type: 'single',
                points: 1,
                message: '',
                incorrectMessage: '',
                tip: '',
                answers: [
                    {
                        id: 1,
                        text: 'Foo',
                        correct: false
                    },
                    {
                        id: 2,
                        text: 'Bar',
                        correct: true
                    },
                    {
                        id: 3,
                        text: 'Baz',
                        correct: false
                    },
                    {
                        id: 4,
                        text: 'Quix',
                        correct: false
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Choose the right answers',
        text: 'Description',
        items: [
            {
                id: 1,
                type: 'multiple',
                points: 1,
                answerMessage: '',
                correctAnswerMessage: '',
                incorrectAnswerMessage: '',
                tip: '',
                answers: [
                    {
                        id: 1,
                        text: 'Foo',
                        correct: false
                    },
                    {
                        id: 2,
                        text: 'Bar',
                        correct: true
                    },
                    {
                        id: 3,
                        text: 'Baz',
                        correct: true
                    },
                    {
                        id: 4,
                        text: 'Quix',
                        correct: false
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'Answer the questions',
        text: 'Listen to Miranda talking about herself. What do you learn about Miranda? Write your answers.',
        items: [
            {
                id: 1,
                type: 'free',
                text: 'What’s her favorite season?',
                points: 1,
                answerMessage: '',
                correctAnswerMessage: '',
                incorrectAnswerMessage: '',
                tip: '',
                answers: ['winter']
            },
            {
                id: 2,
                type: 'free',
                text: 'What’s her favorite band?',
                points: 1,
                answerMessage: '',
                correctAnswerMessage: '',
                incorrectAnswerMessage: '',
                tip: '',
                answers: []
            },
            {
                id: 3,
                type: 'free',
                text: 'Does she ever go out on weeknights?',
                points: 1,
                answerMessage: '',
                correctAnswerMessage: '',
                incorrectAnswerMessage: '',
                tip: '',
                answers: []
            },
            {
                id: 4,
                type: 'free',
                text: 'Does she have any pet?',
                points: 1,
                answerMessage: '',
                correctAnswerMessage: '',
                incorrectAnswerMessage: '',
                tip: '',
                answers: []
            },
            {
                id: 5,
                type: 'free',
                text: 'How much time does she spend with her family?',
                points: 1,
                answerMessage: '',
                correctAnswerMessage: '',
                incorrectAnswerMessage: '',
                tip: '',
                answers: []
            },
            {
                id: 6,
                type: 'free',
                text: 'What does she usually do on weekends?',
                points: 1,
                answerMessage: '',
                correctAnswerMessage: '',
                incorrectAnswerMessage: '',
                tip: '',
                answers: []
            }
        ]
    },
    {
        id: 4,
        title: 'Answer the questions',
        text: 'Where do people make friends? Is it hard for you to make friends?',
        items: [
            {
                id: 1,
                type: 'essay',
                points: 1,
                answerMessage: '',
                correctAnswerMessage: '',
                incorrectAnswerMessage: '',
                tip: ''
            }
        ]
    },
    {
        id: 5,
        title: 'Fill in the blanks',
        text: 'Complete the conversation with the verb be. Use contractions where possible.',
        items: [
            {
                id: 1,
                type: 'fib',
                text: `<p>Koji: Hi, <strong>I’<i>m</i></strong> Koji.</p>
                <p>Isabel:\tHi. I {am|is|are} Isabel. Where you from, Koji?</p>
                <p>Koji: I [am|'m] from Japan. How about you?</p>
                <p>Isabel:\tMonterrey — in Mexico.</p>
                <p>Koji: Oh, my <i>friends</i> Manuel and Rosa {} from Mexico, too.</p>
                <p>Isabel:\tReally? {} they here now?</p>
                <p>Koji: No, they {} not. Uh, I guess they {} late.</p>
                <p>Isabel:\t{} the teacher here?</p>
                <p>Koji: Yes, she {}. She {} over there.</p>
                <p>Isabel:\tShe looks nice. What {} her name?</p>
                <p>Koji: I think it {} Ms. Barnes.</p>`,
                points: 1,
                answerMessage: '',
                correctAnswerMessage: '',
                incorrectAnswerMessage: '',
                tip: ''
            }
        ]
    },
    {
        id: 6,
        title: 'Choose the right answer',
        text: 'Are the statements true or false? Write of you agree with each of them. ',
        items: [
            {
                id: 1,
                type: 'boolean',
                text: 'It’s not good to make short responses when you listen.',
                points: 1,
                answerMessage: '',
                correctAnswerMessage: '',
                incorrectAnswerMessage: '',
                tip: '',
                answer: true
            },
            {
                id: 2,
                type: 'boolean',
                text: 'When you answer questions, you don’t just reply "Yes" or "No".',
                points: 1,
                answerMessage: '',
                correctAnswerMessage: '',
                incorrectAnswerMessage: '',
                tip: '',
                answer: true
            },
            {
                id: 3,
                type: 'boolean',
                text: 'Ask a lot of follow-up questions.',
                points: 1,
                answerMessage: '',
                correctAnswerMessage: '',
                incorrectAnswerMessage: '',
                tip: '',
                answer: true
            },
            {
                id: 4,
                type: 'boolean',
                text: 'Think of a conversation like an interview.',
                points: 1,
                answerMessage: '',
                correctAnswerMessage: '',
                incorrectAnswerMessage: '',
                tip: '',
                answer: true
            },
            {
                id: 5,
                type: 'boolean',
                text: 'You have to answer personal questions.',
                points: 1,
                answerMessage: '',
                correctAnswerMessage: '',
                incorrectAnswerMessage: '',
                tip: '',
                answer: true
            }
        ]
    }
];

export default exercises;