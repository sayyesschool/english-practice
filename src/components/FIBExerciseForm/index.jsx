import TextEditor from '../TextEditor';

import './index.scss';

export default function FIBItemForm({ item }) {
    return (
        <TextEditor
            text={item.text}
        />
    );
}