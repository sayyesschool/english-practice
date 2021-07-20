import { useCallback } from 'react';
import ExerciseForm from '../ExerciseForm';

import './index.css';

export default function ExerciseForms({ exercises }) {
    const handleSubmit = useCallback(exercise => {
        console.log(exercise);
    }, []);

    return (
        <main className="exercise-forms">
            {exercises.map(exercise =>
                <ExerciseForm
                    exercise={exercise}
                    onSubmit={handleSubmit}
                />
            )}
        </main>
    );
}