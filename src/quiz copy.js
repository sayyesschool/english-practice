const quiz = {
    items: [
        {
            id: 1,
            type: 'single',
            title: 'Единственный выбор',
            body: 'Выберете один правильный вариант',
            points: 1,
            answerMessage: '',
            correctAnswerMessage: '',
            incorrectAnswerMessage: '',
            tip: '',
            answers: [
                {
                    id: 1,
                    correct: true,
                    text: 'Hello!'
                },
                {
                    id: 2,
                    correct: false,
                    text: 'Bye!'
                },
                {
                    id: 3,
                    correct: false,
                    text: 'Adios!'
                }
            ]
        },
        {
            id: 2,
            type: 'multiple',
            title: 'Множественный выбор',
            content: 'Выберете несколько правильных ответов',
            points: 1,
            answerMessage: '',
            correctAnswerMessage: '',
            incorrectAnswerMessage: '',
            tip: '',
            answers: [
                {
                    id: 1,
                    correct: true,
                    text: 'Hello!'
                },
                {
                    id: 2,
                    correct: true,
                    text: 'Hi!'
                },
                {
                    id: 3,
                    correct: false,
                    text: 'Bye!'
                }
            ]
        },
        {
            id: 3,
            type: 'free',
            title: 'Свободный ввод',
            content: 'Введете текст',
            points: 1,
            answerMessage: '',
            correctAnswerMessage: '',
            incorrectAnswerMessage: '',
            tip: '',
            answers: [
                {
                    id: 1,
                    text: 'Hello!'
                },
                {
                    id: 2,
                    text: 'Hi!'
                },
                {
                    id: 3,
                    text: 'Bye!'
                }
            ]
        },
        {
            id: 4,
            type: 'essay',
            title: 'Заполните пробелы',
            content: 'Заполните пробелы',
            points: 1,
            answerMessage: '',
            correctAnswerMessage: '',
            incorrectAnswerMessage: '',
            tip: ''
        },
        {
            id: 5,
            type: 'fib',
            title: 'Заполните пробелы',
            content: 'Заполните пробелы',
            points: 1,
            answerMessage: '',
            correctAnswerMessage: '',
            incorrectAnswerMessage: '',
            tip: '',
            body: "{Are} you sleepy? Yes, I [am|'m] sleepy."
        }
    ]
};

export default quiz;