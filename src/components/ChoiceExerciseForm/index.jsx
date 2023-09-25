import { useCallback, useState } from 'react';
import {
    Button,
    Checkbox,
    Icon,
    IconButton,
    FormField,
    List, ListItem, ListGroup,
    Switch,
    Radio
} from 'mdc-react';

import './index.scss';

export default function ChoiceExerciseForm({ exercise, onUpdate }) {
    const [multiple, setMultiple] = useState(exercise.multiple);

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

    const handleMarkSingleItemCorrect = useCallback(itemId => {
        onUpdate({
            ...exercise,
            items: exercise.items.map(item => ({
                ...item,
                correct: item.id === itemId
            }))
        });
    }, [exercise, onUpdate]);

    const handleMarkMultipleItemCorrect = useCallback(itemId => {
        onUpdate({
            ...exercise,
            items: exercise.items.map(item => item.id !== itemId ? item : ({
                ...item,
                correct: !item.correct
            }))
        });
    }, [exercise, onUpdate]);

    const handleDeleteItem = useCallback(itemId => {
        onUpdate({
            ...exercise,
            items: exercise.items.filter(a => a.id !== itemId)
        });
    }, [exercise, onUpdate]);

    return (
        <ListGroup>
            <ListGroup.Subheader>
                Варианты ответа:

                <FormField label="Несколько вариантов ответа">
                    <Switch
                        checked={multiple}
                        onChange={() => setMultiple(v => !v)}
                    />
                </FormField>
            </ListGroup.Subheader>

            <List element="div">
                {exercise.items.map(item =>
                    <ListItem key={item.id} selected={item.correct}>
                        <ListItem.Graphic>
                            {multiple ?
                                <Checkbox
                                    checked={item.correct}
                                    onChange={() => handleMarkMultipleItemCorrect(item.id)}
                                />
                                :
                                <Radio
                                    checked={item.correct}
                                    onChange={() => handleMarkSingleItemCorrect(item.id)}
                                />
                            }

                        </ListItem.Graphic>

                        <ListItem.Text>
                            <input
                                value={item.text}
                                onChange={event => handleUpdateItem(item.id, event.target.value)}
                            />
                        </ListItem.Text>

                        <ListItem.Meta>
                            <IconButton
                                icon="delete"
                                onClick={() => handleDeleteItem(item.id)}
                            />
                        </ListItem.Meta>
                    </ListItem>
                )}
            </List>

            <Button
                className="new-item-button"
                type="button"
                icon={<Icon>add</Icon>}
                label="Добавить ответ"
                outlined
                onClick={handleAddItem}
            />
        </ListGroup>
    );
}