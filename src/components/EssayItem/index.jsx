import {
    Typography
} from 'mdc-react';

import TextEditor from '../TextEditor';

import './index.css';

export default function EssayItem({ item }) {
    return (
        <div className="essay-item">
            {item.text &&
                <Typography>{item.text}</Typography>
            }

            <TextEditor
                text=""
            />
        </div>
    );
}