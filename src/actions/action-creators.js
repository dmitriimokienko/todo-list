import c from './action-constants';

export const searchFilter = name => ({
    type: c.FIND_BY_TITLE,
    payload: name
});

export const addNewCategory = addedCategory => ({
    type: c.ADD_NEW_CATEGORY,
    payload: addedCategory
});

export const addNewTask = addedTask => ({
    type: c.ADD_NEW_TASK,
    payload: addedTask
});

export const removeCategory = id => ({
    type: c.REMOVE_CATEGORY,
    payload: id
});

export const removeTask = categoryId => ({
    type: c.REMOVE_TASK,
    payload: categoryId
});

export const editCategory = updatedCategory => ({
    type: c.EDIT_CATEGORY,
    payload: updatedCategory
});

export const editTask = updatedTask => ({
    type: c.EDIT_TASK,
    payload: updatedTask
});
