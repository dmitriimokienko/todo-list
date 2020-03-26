import { createSelector } from 'reselect';

export const getCategories = state => state.categories;

export const getIdFromURL = state => +state.routing.location.pathname.replace(/(?:\/.+?\/)|(?:\/)/g, '');

export const getMainCategories = createSelector([getCategories], items =>
    items.filter(item => item.parentId === 'none')
);

export const getCategoryById = createSelector([getCategories, getIdFromURL], (items, id) => {
    return items.filter(item => item.id === id)[0];
});
