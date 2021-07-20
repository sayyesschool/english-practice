import Exercise from '../Exercise';

import './index.css';

export default function Exercises({ exercises }) {
    return (
        <main>
            {exercises.map(exercise =>
                <Exercise
                    exercise={exercise}
                />
            )}
        </main>
    );
}