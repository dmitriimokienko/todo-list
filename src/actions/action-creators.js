import actions from './action-constants';

export const addNewCategory = addedCategory => ({
    type: actions.ADD_NEW_CATEGORY,
    payload: addedCategory
});

export const addNewTask = addedTask => ({
    type: actions.ADD_NEW_TASK,
    payload: addedTask
});

export const removeCategory = id => ({
    type: actions.REMOVE_CATEGORY,
    payload: id
});

export const removeTask = categoryId => ({
    type: actions.REMOVE_TASK,
    payload: categoryId
});

export const editCategory = updatedCategory => ({
    type: actions.EDIT_CATEGORY,
    payload: updatedCategory
});

export const editTask = updatedTask => ({
    type: actions.EDIT_TASK,
    payload: updatedTask
});
