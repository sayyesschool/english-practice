import { useCallback, useState } from 'react';
import {
    Button,
    Card,
    TextField
} from 'mdc-react';

import ExerciseItemForm from '../ExerciseItemForm';

const defaultExercise = {
    title: '',
    text: '',
    message: '',
    incorrectMessage: '',
    tip: '',
    items: []
};

export default function ExerciseForm({ exercise = defaultExercise, onSubmit, onClose }) {
    const [data, setData] = useState(() => ({
        id: exercise.id,
        title: exercise.title || '',
        text: exercise.text || '',
        message: exercise.message || '',
        incorrectMessage: exercise.incorrectMessage || '',
        tip: exercise.tip || '',
        items: exercise.items || []
    }));

    const handleChange = useCallback(event => {
        setData(data => ({
            ...data,
            [event.target.name]: event.target.value
        }));
    }, []);

    const handleItemUpdate = useCallback(item => {
        setData(data => ({
            ...data,
            items: data.items.map(i => i.id !== item.id ? i : {
                ...i,
                ...item
            })
        }));
    }, []);

    const handleSubmit = useCallback(() => {
        onSubmit(data);
    }, [data, onSubmit]);

    return (
        <Card outlined>
            <Card.Header
                title={exercise.id ? 'Редактирование упражнения' : 'Новое упражнение'}
            />

            <Card.Section primary>
                <TextField
                    name="title"
                    label="Название"
                    value={data.title}
                    filled
                    onChange={handleChange}
                />

                <TextField
                    name="text"
                    label="Описание"
                    value={data.text}
                    filled
                    textarea
                    onChange={handleChange}
                />

                <TextField
                    name="message"
                    label="Сообщение об ответе"
                    value={data.message}
                    filled
                    textarea
                    onChange={handleChange}
                />

                <TextField
                    name="incorrectMessage"
                    label="Сообщение о неправильном ответе"
                    value={data.incorrectMessage}
                    filled
                    textarea
                    onChange={handleChange}
                />

                <TextField
                    name="tip"
                    label="Подсказка"
                    value={data.tip}
                    filled
                    textarea
                    onChange={handleChange}
                />

                {data.items.map(item =>
                    <ExerciseItemForm
                        item={item}
                        onUpdate={handleItemUpdate}
                    />
                )}
            </Card.Section>

            <Card.Actions>
                <Card.Action>
                    <Button onClick={onClose}>Закрыть</Button>
                </Card.Action>

                <Card.Action>
                    <Button onClick={handleSubmit} outlined>Сохранить</Button>
                </Card.Action>
            </Card.Actions>
        </Card>
    );
}