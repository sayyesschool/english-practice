import { useCallback } from 'react';
import {
    Button,
    Icon,
    IconButton,
    List, ListItem,
    Switch
} from 'mdc-react';

import './index.scss';

export default function BooleanExerciseForm({ exercise, onUpdate }) {
    const handleAddItem = useCallback(() => {
        onUpdate({
            ...exercise,
            items: exercise.items.concat({
                id: Date.now(),
                text: 'Новый элемент',
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

    const handleItemCorrect = useCallback(itemId => {
        onUpdate({
            ...exercise,
            items: exercise.items.map(item => ({
                ...item,
                correct: item.id === itemId
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
        <div>
            <List>
                {exercise.items.map(item =>
                    <ListItem
                        key={item.id}
                        graphic={
                            <Switch
                                checked={item.correct}
                                onChange={() => handleItemCorrect(v => !v)}
                            />
                        }
                        text={
                            <input
                                value={item.text}
                                onChange={event => handleUpdateItem(item.id, event.target.value)}
                            />
                        }
                        meta={
                            <IconButton
                                icon="delete"
                                onClick={() => handleDeleteItem(item.id)}
                            />
                        }
                    />
                )}
            </List>

            <Button
                className="new-item-button"
                type="button"
                icon={<Icon>add</Icon>}
                label="Добавить элемент"
                outlined
                onClick={handleAddItem}
            />
        </div>
    );
}