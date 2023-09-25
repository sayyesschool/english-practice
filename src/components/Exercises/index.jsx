import { useCallback, useState } from 'react';
import {
    Button,
    Layout,
    Typography
} from 'mdc-react';

import Exercise from '../Exercise';
import FormDialog from '../FormDialog';
import ExerciseForm from '../ExerciseForm';

export default function Exercises({ exercises }) {
    const [isCreating, setCreating] = useState(false);

    const handleCreateExercise = useCallback(() => {

    }, []);

    const handleUpdateExercise = useCallback(() => {

    }, []);

    return (
        <main>
            <Layout element="header" className="app-header" row justifyContent="between" alignItems="center">
                <Typography type="headline4" noMargin>English Practice</Typography>

                <Button onClick={() => setCreating(true)}>Создать</Button>
            </Layout>

            {exercises.map(exercise =>
                <Exercise
                    key={exercise.id}
                    exercise={exercise}
                />
            )}

            <FormDialog
                title="Новое упражнение"
                open={isCreating}
                onClose={() => setCreating(v => !v)}
            >
                <ExerciseForm
                    onSubmit={handleCreateExercise}
                />
            </FormDialog>
        </main>
    );
}