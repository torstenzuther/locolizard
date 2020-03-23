import { tags } from './tags';
import { dictionary } from './dictionary';

export const visit = elem => {
    if (elem.tagName && !tags[elem.tagName]) {
        return;
    }
    
    if (elem.nodeType === Node.TEXT_NODE && elem.nodeValue) {
        if (dictionary[elem.nodeValue]) {
            elem.textContent = dictionary[elem.nodeValue];
        }
        return;
    }
    for (let i=0; i<elem.childNodes.length; i++) {
        visit(elem.childNodes[i]);
    }
  };