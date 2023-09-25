import TextEditor from '../TextEditor';

import './index.scss';

export default function EssayExerciseContent({ exercise }) {
    return (
        <div className="essay-exercise-content">
            <TextEditor
                text=""
            />
        </div>
    );
}