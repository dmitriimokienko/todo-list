import { SubmissionError } from 'redux-form';
import { validateTitle } from './validate';

export const checkError = (values, validateFn = validateTitle) => {
    const errorMessage = validateFn(values);
    if (errorMessage) {
        throw new SubmissionError({ _error: errorMessage });
    }
};
