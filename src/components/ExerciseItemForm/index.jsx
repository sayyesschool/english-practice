import { createElement } from 'react';

import SingleChoiceItemForm from '../SingleChoiceItemForm';
import MultipleChoiceItemForm from '../MultipleChoiceItemForm';
import FreeInputItemForm from '../FreeInputItemForm';
import FIBItemForm from '../FIBItemForm';
import EssayItemForm from '../EssayItemForm';
import BooleanItemForm from '../BooleanItemForm';

const ComponentsByType = {
    single: SingleChoiceItemForm,
    multiple: MultipleChoiceItemForm,
    free: FreeInputItemForm,
    fib: FIBItemForm,
    essay: EssayItemForm,
    boolean: BooleanItemForm
};

export default function ExerciseItemForm({ item, ...props }) {
    return createElement(ComponentsByType[item.type], {
        key: item.id,
        item,
        ...props
    });
}