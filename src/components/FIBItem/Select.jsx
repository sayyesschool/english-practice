import { useState } from 'react';

export default function Select({ values }) {
    const [value, setValue] = useState('');

    return (
        <select
            value={value}
            onChange={event => setValue(event.target.value)}
        >
            <option value="" />

            {values.map(value =>
                <option value={value}>{value}</option>
            )}
        </select>
    );
}