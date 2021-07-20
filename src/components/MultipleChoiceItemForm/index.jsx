import { useCallback, useState } from 'react';
import {
    Button,
    Checkbox,
    IconButton,
    List, ListItem,
    Typography
} from 'mdc-react';

import './index.css';

export default function SingleChoiceItemForm({ item }) {
    const [answers, setAnswers] = useState(item.answers);

    const handleAddAnswer = useCallback(event => {
        const answer = {
            id: Date.now(),
            text: 'Новый ответ'
        };

        setAnswers(answers => answers.concat(answer));
    }, []);

    const handleUpdateAnswer = useCallback((answerId, text) => {
        setAnswers(answers => answers.map(answer => answer.id !== answerId ? answer : { ...answer, text }));
    }, []);

    const handleMarkAnswerCorrect = useCallback(answerId => {
        setAnswers(answers => answers.map(answer => answer.id !== answerId ? answer : { ...answer, correct: !answer.correct }));
    }, []);

    const handleDeleteAnswer = useCallback(answerId => {
        setAnswers(answers => answers.filter(a => a.id !== answerId));
    }, []);

    return (
        <div className="multiple-choice-item-form">
            <Typography>Варианты ответа</Typography>

            <List element="div">
                {answers.map(answer =>
                    <ListItem key={answer.id}>
                        <ListItem.Graphic>
                            <Checkbox
                                checked={answer.correct}
                                onChange={() => handleMarkAnswerCorrect(answer.id)}
                            />
                        </ListItem.Graphic>

                        <ListItem.Text>
                            <input
                                value={answer.text}
                                onChange={event => handleUpdateAnswer(answer.id, event.target.value)}
                            />
                        </ListItem.Text>

                        <ListItem.Meta>
                            <IconButton
                                icon="delete"
                                onClick={() => handleDeleteAnswer(answer.id)}
                            />
                        </ListItem.Meta>
                    </ListItem>
                )}
            </List>

            <Button outlined onClick={handleAddAnswer}>Добавить ответ</Button>
        </div>
    );
}