import { TextField } from 'mdc-react';
import { useLayoutEffect, useRef } from 'react';

export default function TextArea({ autoResize, ...props }) {
    const textareaRef = useRef();

    useLayoutEffect(() => {
        if (!autoResize) return;

        const textarea = textareaRef.current.control;

        function setHeight() {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }

        setHeight();

        textarea.addEventListener('input', setHeight);

        return () => textarea.removeEventListener(setHeight);
    }, [autoResize]);

    return (
        <TextField
            ref={textareaRef}
            {...props}
        />
    );
}