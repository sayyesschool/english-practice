import { htmlToJsx } from '../../utils';

import './index.scss';

export default function FIBExerciseContent({ exercise }) {
    return htmlToJsx(exercise.body);
}