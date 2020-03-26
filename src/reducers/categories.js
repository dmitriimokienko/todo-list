import c from '../actions/action-constants';

const initialState = [
    {
        id: 1,
        name: 'Category 1',
        parentId: 'none'
    },
    {
        id: 2,
        name: 'Category 2',
        parentId: 'none'
    },
    {
        id: 3,
        name: 'Category 3',
        parentId: 'none'
    },
    {
        id: 4,
        name: 'Category 4',
        parentId: 'none'
    },
    {
        id: 31,
        name: 'Category 3 1',
        parentId: 3
    },
    {
        id: 32,
        name: 'Category 3 2',
        parentId: 3
    },
    {
        id: 321,
        name: 'Category 3 2 1',
        parentId: 32
    },
    {
        id: 33,
        name: 'Category 3 3',
        parentId: 3
    }
];

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case c.ADD_NEW_CATEGORY:
            return [
                {
                    ...action.payload
                },
                ...state
            ];
        case c.REMOVE_CATEGORY:
            return state.filter(item => item.id !== action.payload);
        case c.EDIT_CATEGORY:
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item;
                }
                return {
                    ...item,
                    ...action.payload
                };
            });
        default:
            return state;
    }
}
