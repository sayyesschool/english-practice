import { useState } from 'react';
import {
    TextField
} from 'mdc-react';

import './index.css';

export default function EssayItemForm({ item }) {
    const [value, setValue] = useState('');

    return (
        <div className="essay-item-form">
            <TextField
                value={item.text}
                filled
                textarea
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
}