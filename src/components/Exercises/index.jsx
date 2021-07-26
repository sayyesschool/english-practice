import Exercise from '../Exercise';

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