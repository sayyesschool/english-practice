import { useCallback, useState } from 'react';
import classnames from 'classnames';

import ExerciseContentCard from '../ExerciseContentCard';
import ExerciseFormCard from '../ExerciseFormCard';

import './index.scss';

const classNameByType = {
    boolean: 'boolean-exercise',
    choice: 'choice-exercise',
    text: 'text-exercise',
    fib: 'fib-exercise',
    essay: 'essay-exercise'
};

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
        <div className={classnames('exercise', classNameByType[exercise.type], {
            'exercise--checked': isChecked,
            [`${classNameByType[exercise.type]}--checked`]: isChecked
        })}>
            {isEditing ? (
                <ExerciseFormCard
                    exercise={exercise}
                    onClose={handleEdit}
                    onSubmit={onSubmit}
                />
            ) : (
                <ExerciseContentCard
                    exercise={exercise}
                    checked={isChecked}
                    onEdit={handleEdit}
                    onCheck={handleCheck}
                />
            )}
        </div>
    );
}