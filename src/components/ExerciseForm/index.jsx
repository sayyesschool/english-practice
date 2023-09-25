import { createElement, useCallback, useState } from 'react';
import {
    Layout,
    Select,
    TextField
} from 'mdc-react';

import BooleanExerciseForm from '../BooleanExerciseForm';
import ChoiceExerciseForm from '../ChoiceExerciseForm';
import TextExerciseForm from '../TextExerciseForm';
import FIBExerciseForm from '../FIBExerciseForm';
import EssayExerciseForm from '../EssayExerciseForm';

import './index.scss';

const ComponentsByType = {
    boolean: BooleanExerciseForm,
    choice: ChoiceExerciseForm,
    text: TextExerciseForm,
    fib: FIBExerciseForm,
    essay: EssayExerciseForm
};

const typeOptions = [
    {
        key: 'null',
        value: '',
        text: ''
    },
    {
        key: 'boolean',
        value: 'boolean',
        text: 'Да / Нет'
    },
    {
        key: 'choice',
        value: 'choice',
        text: 'Выбор'
    },
    {
        key: 'text',
        value: 'text',
        text: 'Текст'
    },
    {
        key: 'fib',
        value: 'fib',
        text: 'Заполнить пробелы'
    },
    {
        key: 'essay',
        value: 'essay',
        text: 'Эссэ'
    }
];

const defaultExercise = {
    type: '',
    title: '',
    text: '',
    items: []
};

export default function ExerciseForm({ exercise = defaultExercise, onSubmit, ...props }) {
    const [data, setData] = useState(() => ({
        id: exercise.id,
        type: exercise.type,
        title: exercise.title || '',
        text: exercise.text || '',
        items: exercise.items || []
    }));

    const handleSubmit = useCallback(() => {
        onSubmit(data);
    }, [data, onSubmit]);

    const handleChange = useCallback(event => {
        event.persist();

        setData(data => ({
            ...data,
            [event.target.name]: event.target.value
        }));
    }, []);

    const handleUpdate = useCallback(exercise => {
        setData(data => ({
            ...data,
            ...exercise
        }));
    }, []);

    return (
        <form className="exercise-form" onSubmit={handleSubmit} {...props}>
            <Layout column>
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

                <Select
                    name="type"
                    label="Тип"
                    value={data.type}
                    options={typeOptions}
                    filled
                    onChange={handleChange}
                />

                {data.type && createElement(ComponentsByType[data.type], {
                    key: exercise.id,
                    exercise: data,
                    onUpdate: handleUpdate
                })}
            </Layout>
        </form>
    );
}