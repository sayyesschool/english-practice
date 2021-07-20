import { useState } from 'react';

import './index.css';

export default function FIBItemForm({ item }) {
    return (
        <div className="fib-item-form">
            <div>{item.text}</div>
        </div>
    );
}