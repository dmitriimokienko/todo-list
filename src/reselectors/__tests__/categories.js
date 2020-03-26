import { getMainCategories, getCategories } from '../categories';

describe('categories selectors', () => {
    const state = {
        categories: [
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
            }
        ]
    };

    test('should return categories with parent id "none"', () => {
        const expected = [
            {
                id: 3,
                name: 'Category 3',
                parentId: 'none'
            },
            {
                id: 4,
                name: 'Category 4',
                parentId: 'none'
            }
        ];

        expect(getMainCategories(state)).toEqual(expected);
    });

    test('should return category', () => {
        const expected = [
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
            }
        ];

        expect(getCategories(state)).toEqual(expected);
    });
});
