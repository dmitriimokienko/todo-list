import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { mapStateToProps, ProgressBar } from '../ProgressBar';

configure({ adapter: new Adapter() });

describe('progress bar', () => {
    const mockState = {
        tasks: [
            {
                id: 21,
                name: 'To-Do Item 2 1',
                isDone: false,
                description: 'description',
                categoryId: 2
            },
            {
                id: 2,
                name: 'To-Do Item 2',
                isDone: false,
                description: 'description',
                categoryId: 'none'
            },
            {
                id: 1,
                name: 'To-Do Item 1',
                isDone: true,
                description: 'test',
                categoryId: 'none'
            },
            {
                id: 3,
                name: 'To-Do Item 3',
                isDone: false,
                description: 'description',
                categoryId: 'none'
            }
        ]
    };

    it('progress bar renders without crashing', () => {
        shallow(<ProgressBar />);
    });

    it('mapStateToProps correct works', () => {
        const props = mapStateToProps(mockState);

        expect(props).toEqual({ percentage: 25 });
    });

    it('progress bar correct render', () => {
        const progressBar = shallow(<ProgressBar percentage={75} />);

        expect(progressBar.find('.progress-bar').prop('style')).toEqual({
            width: '75%'
        });
    });

    it('progress bar empty percentage correct render', () => {
        const progressBar = shallow(<ProgressBar />);

        expect(progressBar.find('.progress-bar').prop('style')).toEqual({
            width: '0%'
        });
    });
});
