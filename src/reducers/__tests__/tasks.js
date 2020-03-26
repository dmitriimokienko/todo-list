import reduser from '../';
import c from '../../actions/action-constants';
import tasksReducer from '../tasks';

describe('categories reducers', () => {
    const mockState = [
        {
            id: 202,
            name: 'To-Do Item 4',
            isDone: false,
            description: '',
            categoryId: 2
        }
    ];

    test('should handle EDIT_TASK', () => {
        const editedTask = {
            type: c.EDIT_TASK,
            payload: {
                id: 202,
                name: 'To-Do Item 4 changed',
                isDone: true,
                description: 'Test',
                categoryId: 1
            }
        };
        const expected = [
            {
                id: 202,
                name: 'To-Do Item 4 changed',
                isDone: true,
                description: 'Test',
                categoryId: 1
            }
        ];
        expect(tasksReducer(mockState, editedTask)).toEqual(expected);
    });

    test('should handle ADD_NEW_TASK', () => {
        const addedTask = {
            type: c.ADD_NEW_TASK,
            payload: {
                id: 101010,
                name: 'NEW To-Do',
                isDone: false,
                description: 'description',
                categoryId: 5
            }
        };
        const expected = [
            {
                id: 101010,
                name: 'NEW To-Do',
                isDone: false,
                description: 'description',
                categoryId: 5
            },
            {
                id: 202,
                name: 'To-Do Item 4',
                isDone: false,
                description: '',
                categoryId: 2
            }
        ];
        expect(tasksReducer(mockState, addedTask)).toEqual(expected);
    });
});
