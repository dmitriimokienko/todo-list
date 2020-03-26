import { addNewTask, editTask } from './action-creators';
import { validate } from './validate';
import { checkError } from './helpers';

export const handleAddTask = (values) => (dispatch) => {
    try {
        checkError(values);
        dispatch(addNewTask({ id: new Date().valueOf(), name: values.name, isDone: false }));
    } catch (e) {
        console.error(e);
    }
};

export const handleEditTask = (values) => (dispatch) => {
    try {
        checkError(values, validate);
        dispatch(
            editTask({
                id: values.id,
                name: values.name,
                isDone: values.isDone,
                description: values.description,
            }),
        );
    } catch (e) {
        console.error(e);
    }
};
