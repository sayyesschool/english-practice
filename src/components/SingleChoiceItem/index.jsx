import { useState, useCallback } from 'react';
import {
    List, ListItem,
    Radio
} from 'mdc-react';

import './index.css';

export default function SingleChoiceItem({ item, checked }) {
    const [selectedAnswer, setSelectedAnswer] = useState();
    const [correctAnswer] = useState(item?.answers.find(answer => answer.correct));

    const handleChange = useCallback(answer => {
        setSelectedAnswer(answer);
    }, []);

    return (
        <div className={`single-choice-item ${checked ? 'single-choice-item--checked' : ''}`}>
            <List element="div">
                {item.answers.map(answer =>
                    <ListItem
                        key={answer.id}
                        element="label"
                        className={checked && (
                            (answer.correct && 'mdc-list-item--correct') ||
                            (selectedAnswer.id === answer.id && !answer.correct && 'mdc-list-item--incorrect')
                        )}
                        graphic={
                            <Radio
                                checked={answer === selectedAnswer}
                                onChange={() => handleChange(answer)}
                                disabled={checked}
                            />
                        }
                        text={answer.text}
                        activated={answer === selectedAnswer}
                    />
                )}
            </List>
        </div>
    );
}

function getListItemClass() {

}