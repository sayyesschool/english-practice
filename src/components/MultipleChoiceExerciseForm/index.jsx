import { useCallback } from 'react';
import {
    Button,
    Checkbox,
    IconButton,
    List, ListItem, ListGroup,
    Typography
} from 'mdc-react';

import './index.scss';

export default function MultipleChoiceItemForm({ exercise, onUpdate }) {
    const handleAddItem = useCallback(() => {
        onUpdate({
            ...exercise,
            items: exercise.items.concat({
                id: Date.now(),
                text: 'Новый ответ',
                correct: false
            })
        });
    }, [exercise, onUpdate]);

    const handleUpdateItem = useCallback((itemId, text) => {
        onUpdate({
            ...exercise,
            items: exercise.items.map(item => item.id !== itemId ? item : { ...item, text })
        });
    }, [exercise, onUpdate]);

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