import reduser from '../';
import categoriesReducer from '../categories';
import c from '../../actions/action-constants';

describe('categories reducers', () => {
    const mockState = [
        {
            id: 31,
            name: 'Test category',
            parentId: 3
        }
    ];

    test('should handle ADD_NEW_CATEGORY', () => {
        const addedCategory = {
            type: c.ADD_NEW_CATEGORY,
            payload: {
                id: 2,
                name: 'Test category',
                parentId: 'none'
            }
        };
        expect(categoriesReducer(mockState, addedCategory)).toEqual([
            {
                id: 2,
                name: 'Test category',
                parentId: 'none'
            },
            {
                id: 31,
                name: 'Test category',
                parentId: 3
            }
        ]);
    });

    test('should handle REMOVE_CATEGORY', () => {
        const removedCategory = {
            type: c.REMOVE_CATEGORY,
            payload: 31
        };
        expect(categoriesReducer(mockState, removedCategory)).toEqual([]);
    });
});
