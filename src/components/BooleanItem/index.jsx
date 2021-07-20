import { useState } from 'react';
import {
    FormField,
    Radio,
    Typography
} from 'mdc-react';

import './index.css';

export default function BooleanItem({ item }) {
    const [value, setValue] = useState();

    return (
        <div className="boolean-item">
            {item.text &&
                <Typography>{item.text}</Typography>
            }

            <FormField label="True">
                <Radio
                    checked={value === true}
                    onChange={() => setValue(true)}
                />
            </FormField>

            <FormField label="False">
                <Radio
                    checked={value === false}
                    onChange={() => setValue(false)}
                />
            </FormField>
        </div>
    );
}