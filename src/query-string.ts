import { EntitiesObject } from 'types';

export function queryString(input: string): EntitiesObject<string> {
    if (input.charAt(0) === '?' || input.charAt(0) === '#') {
        input = input.slice(1);
    }

    return input.split('&')
        .map((param: string) => {
            const [key, value] = param.split('=');

            return { key, value };
        })
        .reduce((acc, { key, value }) => ({
            ...acc,
            [key]: value
        }), {});
};