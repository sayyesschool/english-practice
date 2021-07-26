import { parse, htmlToJsx } from './utils';

import './index.css';

export default function FIBItem({ item }) {
    const html = parse(item.text);
    const jsx = htmlToJsx(html);

    return (
        <div className="fib-item">
            {jsx}
        </div>
    );
}