import { useState } from 'react';
import {
    TextField,
    Typography
} from 'mdc-react';

import TextEditor from '../TextEditor';

import './index.css';

export default function EssayItem({ item }) {
    const [value, setValue] = useState('');

    return (
        <div className="essay-item">
            {item.text &&
                <Typography>{item.text}</Typography>
            }

            <TextEditor />
            {/* <div className="mdc-text-field mdc-text-field--filled mdc-text-field--textarea mdc-text-field--no-label">
                <span class="mdc-text-field__ripple"></span>

                <div
                    className="mdc-text-field__input"
                    contentEditable
                    onInput={event => setValue(event.target.textContent)}
                />

                <span class="mdc-line-ripple" />
            </div> */}
        </div>
    );
}