import { useState } from 'react';
import {
    TextField,
    Typography
} from 'mdc-react';

export default function FreeInputItem({ item, checked }) {
    const [value, setValue] = useState('');

    return (
        <div className="free-input-item">
            {item.text &&
                <Typography>{item.text}</Typography>
            }

            <TextField
                className={checked && !item.answers.includes(value.trim().toLocaleLowerCase()) && 'mdc-text-field--invalid'}
                value={value}
                onChange={event => setValue(event.target.value)}
                filled
                disabled={checked}
            />
        </div>
    );
}