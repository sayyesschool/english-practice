import {
    Button,
    Card,
    IconButton
} from 'mdc-react';

import ExerciseContent from '../ExerciseContent';

import './index.scss';

export default function ExerciseContentCard({ exercise, checked, onEdit, onCheck }) {
    return (
        <Card className="exercise-content-card" outlined>
            <Card.Header
                title={exercise.title}
                actions={
                    <IconButton
                        icon="edit"
                        onClick={onEdit}
                    />
                }
            />

            <Card.Section primary>
                <ExerciseContent
                    exercise={exercise}
                />
            </Card.Section>

            <Card.Actions>
                <Card.Action>
                    {exercise.type !== 'essay' ?
                        <Button onClick={onCheck} disabled={checked}>Проверить</Button>
                        :
                        <Button>Сохранить</Button>
                    }
                </Card.Action>
            </Card.Actions>
        </Card>
    );
}