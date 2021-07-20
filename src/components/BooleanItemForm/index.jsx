import { useState } from 'react';
import {
    Typography,
    Switch
} from 'mdc-react';

import './index.css';

export default function BooleanItemForm({ item }) {
    const [value, setValue] = useState();

    return (
        <div className="boolean-item">
            {item.text &&
                <Typography>{item.text}</Typography>
            }

            <Switch
                checked={value === true}
                onChange={() => setValue(v => !v)}
            />
        </div>
    );
}