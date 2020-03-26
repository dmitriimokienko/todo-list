import c from '../action-constants';
import { addNewCategory, removeTask } from '../action-creators';

describe('actions', () => {
    test('should create an action to add a category', () => {
        const fakeCategory = {
            id: 10101011,
            name: 'test-category',
            parentId: 'none'
        };
        const expectedAction = {
            type: c.ADD_NEW_CATEGORY,
            payload: {
                id: 10101011,
                name: 'test-category',
                parentId: 'none'
            }
        };
        expect(addNewCategory(fakeCategory)).toEqual(expectedAction);
    });

    test('should create an action to remove a task', () => {
        const fakeTaskCategoryId = 2;
        const expectedAction = {
            type: c.REMOVE_TASK,
            payload: 2
        };
        expect(removeTask(fakeTaskCategoryId)).toEqual(expectedAction);
    });
});
