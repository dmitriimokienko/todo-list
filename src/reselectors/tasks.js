import { createSelector } from 'reselect';
import queryString from 'query-string';

export const getTasks = state => state.tasks;

export const getIdFromURL = state => +state.routing.location.pathname.replace(/(?:\/.+?\/)|(?:\/)/g, '');

export const getFilterValuesFromURL = state => queryString.parse(state.routing.location.search);

export const getFilteredTasks = createSelector(
    [getTasks, getFilterValuesFromURL, getIdFromURL],
    (items, filter, id) => {
        const name = filter.filter || '';
        const isDone = filter.isdone === 'true';
        const categoriesTasks = id !== 0 ? items.filter(item => item.categoryId === id) : items;
        const isDoneList = isDone ? categoriesTasks.filter(item => item.isDone) : categoriesTasks;

        return isDoneList.filter(item => item.name.includes(name));
    }
);

export const getTaskById = createSelector([getTasks, getIdFromURL], (items, id) => {
    return items.filter(item => item.id === id)[0];
});

export const calcProgressBar = createSelector([getTasks], items => {
    const allTasks = items.length;
    const doneTasks = items.filter(item => item.isDone).length;

    return doneTasks / allTasks * 100;
});
