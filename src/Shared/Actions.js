import { baseUrl } from '../Shared/BaseURL';

export const fetchNames = () => {
    return fetch(`${baseUrl}names`)
    .then((responce) => responce.json())
};