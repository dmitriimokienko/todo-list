import { checkError } from './helpers';
import { addNewCategory, editCategory, removeCategory, removeTask } from './action-creators';

export const handleAddCategory = (values) => (dispatch) => {
    try {
        checkError(values);
        const { parentId = 'none' } = values;
        dispatch(addNewCategory({ id: new Date().valueOf(), name: values.name, parentId }));
    } catch (e) {
        console.error(e);
    }
};

export const handleChangeCategoryTitle = (values) => (dispatch) => {
    try {
        checkError(values);
        dispatch(editCategory({ id: values.id, name: values.name }));
    } catch (e) {
        console.error(e);
    }
};

export const handleRemoveCategoriesAndTasks = (values) => (dispatch) => {
    let nestedCategories = [values.id];
    let { categories } = values;

    while (nestedCategories.length !== 0) {
        let currentId = nestedCategories.shift();

        categories = categories.filter((item) => {
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
