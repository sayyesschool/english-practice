import { useCallback } from 'react';
import {
    Button,
    IconButton,
    List, ListItem,
    Radio,
    Typography
} from 'mdc-react';

import './index.css';

export default function SingleChoiceItemForm({ item, onUpdate }) {
    const handleAddAnswer = useCallback(() => {
        const answer = {
            id: Date.now(),
            text: 'Новый ответ'
        };

        onUpdate({
            ...item,
            answers: item.answers.concat(answer)
        });
    }, [item, onUpdate]);

    const handleUpdateAnswer = useCallback((answerId, text) => {
        onUpdate({
            ...item,
            answers: item.answers.map(answer => answer.id !== answerId ? answer : { ...answer, text })
        });
    }, [item, onUpdate]);

    const handleMarkAnswerCorrect = useCallback(answerId => {
        onUpdate({
            ...item,
            answers: item.answers.map(answer => ({
                ...answer,
                correct: answer.id === answerId
            }))
        });
    }, [item, onUpdate]);

    const handleDeleteAnswer = useCallback(answerId => {
        onUpdate({
            ...item,
            answers: item.answers.filter(a => a.id !== answerId)
        });
    }, [item, onUpdate]);

    return (
        <div className="single-choice-item-form">
            <Typography>Варианты ответа</Typography>

            <List element="div">
                {item.answers.map(answer =>
                    <ListItem key={answer.id}>
                        <ListItem.Graphic>
                            <Radio
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