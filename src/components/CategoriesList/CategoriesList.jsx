import React from 'react';
import { connect } from 'react-redux';
import { getMainCategories } from '../../reselectors/categories';
import CategoryItem from '../CategotyItem';
import CategoryItemMoveTask from '../CategoryItemMoveTask';

const CategoryList = props => {
    const list = props.nestedCategories || props.categories;
    const isMoveTask = props.isMoveTask;

    return (
        <ul className="list-group category-list">
            {list.map(item => {
                if (isMoveTask) {
                    return <CategoryItemMoveTask key={item.id} {...item} />;
                } else {
                    return <CategoryItem key={item.id} {...item} />;
                }
            })}
        </ul>
    );
};

export const mapStateToProps = state => ({
    categories: getMainCategories(state)
});

export default connect(mapStateToProps)(CategoryList);
