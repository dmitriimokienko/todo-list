import c from '../actions/action-constants';

const initialState = [
    {
        id: 100,
        name: 'To-Do Item 1',
        isDone: false,
        description: '',
        categoryId: 1
    },
    {
        id: 101,
        name: 'To-Do Item 2',
        isDone: true,
        description: 'Some description',
        categoryId: 1
    },
    {
        id: 102,
        name: 'To-Do Item 3',
        isDone: true,
        description: '',
        categoryId: 1
    },
    {
        id: 202,
        name: 'To-Do Item 4',
        isDone: false,
        description: '',
        categoryId: 2
    }
];

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case c.ADD_NEW_TASK:
            return [
                {
                    ...action.payload
                },
                ...state
            ];
        case c.EDIT_TASK:
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item;
                }
                return {
                    ...item,
                    ...action.payload
                };
            });
        case c.REMOVE_TASK:
            return state.filter(item => item.categoryId !== action.payload);
        default:
            return state;
    }
}
