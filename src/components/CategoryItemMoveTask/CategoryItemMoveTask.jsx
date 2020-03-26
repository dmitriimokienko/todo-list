import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryList from '../CategoriesList';
import { getCategories } from '../../reselectors/categories';
import { editTask } from '../../actions/action-creators';
import { getIdFromURL } from '../../reselectors/tasks';

class CategoryItemMoveTask extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    };

    handleChangeCategory = () => {
        const id = this.props.currentTaskId;
        const categoryId = this.props.id;
        const updatedTask = {
            id,
            categoryId
        };

        this.props.onUpdate(updatedTask);
    };

    getChildrenList = id => this.props.categories.filter(item => item.parentId === id);

    render() {
        const { id, name } = this.props;
        const nestedList = this.getChildrenList(id);

        return (
            <React.Fragment>
                <li className="list-group-item">
                    <div className="caregory-item caregory-item-move-task">
                        <span href="#" className="caregory-item-title">
                            {name}
                        </span>

                        <button
                            className="caregory-btn caregory-btn-add pull-right"
                            onClick={this.handleChangeCategory}
                        >
                            <i className="glyphicon glyphicon-arrow-left" />
                        </button>
                    </div>
                </li>
                <CategoryList nestedCategories={nestedList} isMoveTask={true} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    categories: getCategories(state),
    currentTaskId: getIdFromURL(state)
});

const mapDispatchToProps = dispatch => ({
    onUpdate: updatedTask => {
        dispatch(editTask(updatedTask));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItemMoveTask);
