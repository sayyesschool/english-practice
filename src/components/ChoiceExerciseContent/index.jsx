import { useState, useCallback } from 'react';
import {
    Checkbox,
    List, ListItem,
    Radio
} from 'mdc-react';
import classnames from 'classnames';

import './index.scss';

export default function ChoiceExerciseContent({ exercise, checked }) {
    const [chosenItem, setChosenItem] = useState();
    const [chosenItems, setChosenItems] = useState([]);

    const handleChange = useCallback(item => {
        if (exercise.multiple) {
            setChosenItems(correct => correct.includes(item.id) ?
                correct.filter(id => id !== item.id) :
                correct.concat(item.id)
            );
        } else {
            setChosenItem(item);
        }
    }, [exercise]);

    const isItemChosen = useCallback(item => {
        if (exercise.multiple) {
            return chosenItems.includes(item.id);
        } else {
            return item === chosenItem;
        }
    }, [exercise, chosenItem, chosenItems]);

    return (
        <List element="div">
            {exercise.items.map(item =>
                <ListItem
                    key={item.id}
                    element="label"
                    className={classnames('choice-exercise-item', checked && {
                        'mdc-list-item--correct': item.correct,
                        'mdc-list-item--incorrect': !item.correct && isItemChosen(item)
                    })}
                    graphic={exercise.multiple ?
                        <Checkbox
                            checked={chosenItems.includes(item.id)}
                            onChange={() => handleChange(item)}
                            disabled={checked}
                        />
                        :
                        <Radio
                            checked={item === chosenItem}
                            onChange={() => handleChange(item)}
                            disabled={checked}
                        />
                    }
                    text={item.text}
                    activated={checked && (item.correct || isItemChosen(item))}
                />
            )}
        </List>
    );
}