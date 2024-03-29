const exercises = [
    {
        id: 1,
        type: 'single',
        title: 'Choose the right answer',
        text: 'Description',
        items: [
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
    },
    {
        id: 2,
        type: 'multiple',
        title: 'Choose the right answers',
        text: 'Description',
        items: [
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
    },
    {
        id: 3,
        type: 'free',
        title: 'Answer the questions',
        text: 'Listen to Miranda talking about herself. What do you learn about Miranda? Write your answers.',
        items: [
            {
                id: 1,
                text: 'What’s her favorite season?',
                answers: ['winter']
            },
            {
                id: 2,
                text: 'What’s her favorite band?',
                answers: []
            },
            {
                id: 3,
                text: 'Does she ever go out on weeknights?',
                answers: []
            },
            {
                id: 4,
                text: 'Does she have any pet?',
                answers: []
            },
            {
                id: 5,
                text: 'How much time does she spend with her family?',
                answers: []
            },
            {
                id: 6,
                text: 'What does she usually do on weekends?',
                answers: []
            }
        ]
    },
    {
        id: 4,
        type: 'essay',
        title: 'Answer the questions',
        text: 'Where do people make friends? Is it hard for you to make friends?'
    },
    {
        id: 5,
        type: 'fib',
        title: 'Fill in the blanks',
        text: 'Complete the conversation with the verb be. Use contractions where possible.',
        body: `<p>Koji: Hi, <strong>I’<i>m</i></strong> Koji.</p>
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
        html: true
    },
    {
        id: 6,
        type: 'boolean',
        title: 'Choose the right answer',
        text: 'Are the statements true or false? Write of you agree with each of them. ',
        items: [
            {
                id: 1,
                text: 'It’s not good to make short responses when you listen.',
                answer: true
            },
            {
                id: 2,
                text: 'When you answer questions, you don’t just reply "Yes" or "No".',
                answer: true
            },
            {
                id: 3,
                text: 'Ask a lot of follow-up questions.',
                answer: true
            },
            {
                id: 4,
                text: 'Think of a conversation like an interview.',
                answer: true
            },
            {
                id: 5,
                text: 'You have to answer personal questions.',
                answer: true
            }
        ]
    }
];

export default exercises;