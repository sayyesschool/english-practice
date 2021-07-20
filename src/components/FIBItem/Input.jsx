import { useState } from 'react';

export default function Input({ values }) {
    const [value, setValue] = useState('');

    return (
        <span
            className="mdc-chip"
        >
            <span
                className="mdc-chip__text"
                onInput={event => setValue(event.target.textContent)}
                contentEditable
            />
        </span>
    );
}