import { getTasks, calcProgressBar } from '../tasks';

describe('tasks selectors', () => {
    const state = {
        tasks: [
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
            }
        ]
    };

    test('should return all tasks', () => {
        const expected = [
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
            }
        ];

        expect(getTasks(state)).toEqual(expected);
    });

    test('should return all tasks', () => {
        expect(calcProgressBar(state)).toEqual(50);
    });
});
