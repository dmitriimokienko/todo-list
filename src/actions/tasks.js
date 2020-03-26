import { SubmissionError } from 'redux-form';
import { addNewTask, editTask } from './action-creators';
import { validate, validateTitle } from './validate';

export const handleAddTask = values => dispatch => {
    const errorMessage = validateTitle(values);

    if (errorMessage) {
        throw new SubmissionError({ _error: errorMessage });
    } else {
        const addedTask = {
            id: new Date().valueOf(),
            name: values.name,
            isDone: false
        };
        dispatch(addNewTask(addedTask));
    }
};

export const handleEditTask = values => dispatch => {
    const errorMessage = validate(values);

    if (errorMessage) {
        throw new SubmissionError({ _error: errorMessage });
    } else {
        const updatedTask = {
            id: values.id,
            name: values.name,
            isDone: values.isDone,
            description: values.description
        };
        dispatch(editTask(updatedTask));
    }
};
