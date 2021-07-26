import {
    Button,
    Card,
    IconButton,
    Typography
} from 'mdc-react';

import ExerciseItem from '../ExerciseItem';

export default function ExerciseContent({ exercise, checked, onEdit, onCheck }) {
    return (
        <Card className="exercise-content" outlined>
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
                <Typography noMargin>{exercise.text}</Typography>
            </Card.Section>

            <Card.Section secondary>
                {exercise.items.map(item =>
                    <ExerciseItem
                        item={item}
                        checked={checked}
                    />
                )}
            </Card.Section>

            <Card.Actions>
                <Card.Action>
                    <Button onClick={onCheck} disabled={checked}>Проверить</Button>
                </Card.Action>
            </Card.Actions>
        </Card>
    );
}