import { SubmissionError } from 'redux-form';
import { validateTitle } from './validate';
import { addNewCategory, editCategory, removeCategory, removeTask } from './action-creators';

export const handleAddCategory = values => dispatch => {
    const errorMessage = validateTitle(values);
    const parentId = values.parentId || 'none';

    if (errorMessage) {
        throw new SubmissionError({ _error: errorMessage });
    } else {
        const addedCategory = {
            id: new Date().valueOf(),
            name: values.name,
            parentId
        };
        dispatch(addNewCategory(addedCategory));
    }
};

export const handleChangeCategoryTitle = values => dispatch => {
    const errorMessage = validateTitle(values);

    if (errorMessage) {
        throw new SubmissionError({ _error: errorMessage });
    } else {
        const updatedCategory = {
            id: values.id,
            name: values.name
        };
        dispatch(editCategory(updatedCategory));
    }
};

export const handleRemoveCategoriesAndTasks = values => dispatch => {
    let nestedCategories = [values.id];
    let categories = values.categories;

    while (nestedCategories.length !== 0) {
        let currentId = nestedCategories.shift();

        categories = categories.filter(item => {
            if (item.parentId === currentId) {
                nestedCategories.push(item.id);
            }
            if (item.id === currentId) {
                dispatch(removeCategory(currentId));
                dispatch(removeTask(currentId));
            }
            return item;
        });
    }
};
