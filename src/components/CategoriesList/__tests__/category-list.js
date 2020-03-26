import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { mapStateToProps, CategoryList } from '../CategoriesList';

configure({ adapter: new Adapter() });

describe('list of categories', () => {
    const mockState = {
        categories: [
            {
                id: 1,
                name: 'Test category 1',
                parentId: 'none'
            },
            {
                id: 2,
                name: 'Test category 2',
                parentId: 'none'
            },
            {
                id: 21,
                name: 'Test category 2 1',
                parentId: 2
            }
        ]
    };

    it('mapStateToProps correct works', () => {
        const props = mapStateToProps(mockState);

        expect(props).toEqual({
            categories: [
                { id: 1, name: 'Test category 1', parentId: 'none' },
                { id: 2, name: 'Test category 2', parentId: 'none' }
            ]
        });
    });

    it('list of categories renders without crashing', () => {
        const props = mapStateToProps(mockState);

        shallow(<CategoryList categories={props.categories} />);
    });
});
