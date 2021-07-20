import { createElement } from 'react';

import SingleChoiceItem from '../SingleChoiceItem';
import MultipleChoiceItem from '../MultipleChoiceItem';
import FreeInputItem from '../FreeInputItem';
import FIBItem from '../FIBItem';
import EssayItem from '../EssayItem';
import BooleanItem from '../BooleanItem';

const ComponentsByType = {
    single: SingleChoiceItem,
    multiple: MultipleChoiceItem,
    free: FreeInputItem,
    fib: FIBItem,
    essay: EssayItem,
    boolean: BooleanItem
};

export default function ExerciseItem({ item, ...props }) {
    return createElement(ComponentsByType[item.type], {
        key: item.id,
        item,
        ...props
    });
}