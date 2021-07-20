import { useCallback, useState } from 'react';
import {
    Button,
    Card,
    Typography
} from 'mdc-react';

import ExerciseItem from '../ExerciseItem';

export default function Exercise({ exercise }) {
    const [isChecked, setChecked] = useState(false);

    const handleCheck = useCallback(() => {
        setChecked(true);
    }, []);

    return (
        <Card className="exercises" outlined>
            <Card.Header
                title={exercise.title}
            />

            <Card.Section primary>
                <Typography noMargin>{exercise.text}</Typography>
            </Card.Section>

            <Card.Section secondary>
                {exercise.items.map(item =>
                    <ExerciseItem
                        item={item}
                        checked={isChecked}
                    />
                )}
            </Card.Section>

            <Card.Actions>
                <Card.Action>
                    <Button onClick={handleCheck} disabled={isChecked}>Проверить</Button>
                </Card.Action>
            </Card.Actions>
        </Card>
    );
}