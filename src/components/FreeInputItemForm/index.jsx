import { useCallback, useState } from 'react';
import {
    ChipSet, Chip,
    FormField,
    Icon,
    Typography
} from 'mdc-react';

import './index.css';

export default function FreeInputItemForm({ item }) {
    const [text, setText] = useState(item.text);
    const [answers, setAnswers] = useState(item.answers);

    const handleAddAnswer = useCallback(values => {
        setAnswers(values);
    }, []);

    const handleUpdateAnswer = useCallback((answerId, text) => {
        setAnswers(answers => answers.map(answer => answer.id !== answerId ? answer : { ...answer, text }));
    }, []);

    const handleDeleteAnswer = useCallback(answer => {
        setAnswers(answers => answers.filter(a => a !== answer));
    }, []);

    return (
        <div className="free-input-item-form">
            <Typography>
                <input
                    value={text}
                    onChange={event => setText(event.target.value)}
                />
            </Typography>

            <FormField label="Варианты ответа:" alignEnd>
                <ChipSet value={answers} input onChange={handleAddAnswer}>
                    {answers.map(answer =>
                        <Chip
                            text={answer}
                            trailingIcon={
                                <Icon
                                    onClick={() => handleDeleteAnswer(answer)}
                                >delete</Icon>
                            }
                        />
                    )}
                </ChipSet>
            </FormField>
        </div>
    );
}