import { createElement } from 'react';

import Input from './Input';
import Select from './Select';

const typeBySymbol = {
    '{': (values) => `<input data-values="${values}">`,
    '[': (values) => `<select>${values.map(value => `<option value="${value}">${value}</option>`).join('')}</select>`
};

export function parse(string) {
    const regex = /{}|{[^{][^}]*}|\[\]|\[[^[][^\]]*\]/gm;
    let result = '';
    let lastEndIndex = 0;

    for (let match of string.matchAll(regex)) {
        const prevPart = string.slice(lastEndIndex, match.index);
        const token = string.slice(match.index, match.index + match[0].length);
        const control = parseToken(token);

        result += prevPart + control;

        lastEndIndex = match.index + match[0].length;
    }

    result += string.slice(lastEndIndex);

    return result;
}

export function htmlToJsx(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const div = document.createElement('div');
    div.append(...doc.body.children);

    return elementToJsx(div);
}

function elementToJsx(element) {
    const type = element.nodeName.toLowerCase();
    const props = {};

    if (type === '#text') {
        return element.textContent === '\n' ? undefined : element.textContent;
    } else if (type === 'input' && element.type === 'text') {
        return <Input values={element.dataset.values.split(',')} />;
    } else if (type === 'select') {
        return <Select values={Array.from(element.children).map(option => option.value)} />;
    } else if (element.childNodes.length === 0) {
        return createElement(type, props, element.textContent || undefined);
    } else if (element.childNodes.length === 1) {
        return createElement(type, props, element.childNodes[0].textContent);
    } else {
        return createElement(type, props, ...Array.from(element.childNodes).map(child => elementToJsx(child)).filter(child => child !== undefined));
    }
}

function parseToken(token) {
    const typeSymbol = token[0];
    const values = token.slice(1, -1).split('|').map(token => token.trim());

    return typeBySymbol[typeSymbol](values);
}