import { useState, useCallback } from 'react';
import {
    Checkbox,
    List, ListItem
} from 'mdc-react';

import './index.css';

export default function MultipleChoiceItem({ item, checked }) {
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const handleChange = useCallback(answer => {
        setSelectedAnswers(answers => {
            return answers.includes(answer.id) ?
                answers.filter(id => id !== answer.id) :
                answers.concat(answer.id);
        });
    }, []);

    return (
        <div className={`multiple-choice-item ${checked ? 'multiple-choice-item--checked' : ''}`}>
            <List element="div">
                {item.answers.map(answer =>
                    <ListItem
                        key={answer.id}
                        element="label"
                        className={checked && (
                            (answer.correct && 'mdc-list-item--correct') ||
                            (selectedAnswers.includes(answer.id) && !answer.correct && 'mdc-list-item--incorrect')
                        )}
                        graphic={
                            <Checkbox
                                checked={selectedAnswers.includes(answer.id)}
                                onChange={() => handleChange(answer)}
                                disabled={checked}
                            />
                        }
                        text={answer.text}
                        activated={selectedAnswers.includes(answer.id)}
                    />
                )}
            </List>
        </div>
    );
}