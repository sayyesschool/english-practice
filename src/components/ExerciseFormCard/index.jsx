import {
    Button,
    Card,
    IconButton,
} from 'mdc-react';

import ExerciseForm from '../ExerciseForm';

import './index.scss';

export default function ExerciseFormCard({ exercise, onSubmit, onClose }) {
    return (
        <Card className="exercise-form-card" outlined>
            <Card.Header
                title={exercise.id ? 'Редактирование упражнения' : 'Новое упражнение'}
                actions={
                    <IconButton
                        icon="close"
                        onClick={onClose}
                    />
                }
            />

            <Card.Section primary>
                <ExerciseForm
                    id="exercise-create-form"
                    exercise={exercise}
                    onSubmit={onSubmit}
                />
            </Card.Section>

            <Card.Actions>
                <Card.Action>
                    <Button type="button" onClick={onClose}>Закрыть</Button>
                </Card.Action>

                <Card.Action>
                    <Button type="submit" form="exercise-create-form" outlined>Сохранить</Button>
                </Card.Action>
            </Card.Actions>
        </Card>
    );
}