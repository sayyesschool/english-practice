import { useCallback, useState } from 'react';

import ExerciseContent from '../ExerciseContent';
import ExerciseForm from '../ExerciseForm';

import './index.css';

export default function Exercise({ exercise, onSubmit }) {
    const [isEditing, setEditing] = useState(false);
    const [isChecked, setChecked] = useState(false);

    const handleEdit = useCallback(() => {
        setEditing(v => !v);
    }, []);

    const handleCheck = useCallback(() => {
        setChecked(true);
    }, []);

    return (
        <div className="exercise">
            {isEditing ? (
                <ExerciseForm
                    exercise={exercise}
                    onClose={handleEdit}
                    onSubmit={onSubmit}
                />
            ) : (
                <ExerciseContent
                    exercise={exercise}
                    checked={isChecked}
                    onEdit={handleEdit}
                    onCheck={handleCheck}
                />
            )}
        </div>
    );
}