import { createElement } from 'react';
import {
    Typography
} from 'mdc-react';

import BooleanExerciseContent from '../BooleanExerciseContent';
import ChoiceExerciseContent from '../ChoiceExerciseContent';
import TextExerciseContent from '../TextExerciseContent';
import FIBExerciseContent from '../FIBExerciseContent';
import EssayExerciseContent from '../EssayExerciseContent';

import './index.scss';

const ComponentsByType = {
    boolean: BooleanExerciseContent,
    choice: ChoiceExerciseContent,
    text: TextExerciseContent,
    fib: FIBExerciseContent,
    essay: EssayExerciseContent
};

export default function ExerciseContent({ exercise, checked }) {
    return (
        <div className="exercise-content">
            <Typography noMargin>{exercise.text}</Typography>

            {createElement(ComponentsByType[exercise.type], {
                key: exercise.id,
                exercise,
                checked
            })}
        </div>
    );
}