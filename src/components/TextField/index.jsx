import { useLayoutEffect, useRef } from 'react';
import { TextField as MDCTextField } from 'mdc-react';

export default function TextField({ textarea, autoResize, ...props }) {
    const elementRef = useRef();

    useLayoutEffect(() => {
        if (!textarea && !autoResize) return;

        const control = elementRef.current.control;

        function setHeight() {
            control.style.height = '1.5rem';
            control.style.height = `${control.scrollHeight}px`;
        }

        setHeight();

        control.addEventListener('input', setHeight);

        return () => control.removeEventListener('input', setHeight);
    }, [textarea, autoResize]);

    return (
        <MDCTextField
            ref={elementRef}
            textarea
            {...props}
        />
    );
}