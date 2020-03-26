import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import AddCategoryForm from '../AddCategoryForm';
import AddTaskForm from '../AddTaskForm';
import { handleAddCategory } from '../../actions/categories';
import { handleAddTask } from '../../actions/tasks';

class AddingBlock extends Component {
    render() {
        return (
            <div className="header-adding-block">
                <AddCategoryForm form="addNewCategoryForm" onSubmit={this.props.onAddCategory} />
                <AddTaskForm form="addNewTaskForm" onSubmit={this.props.onAddTask} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onAddCategory: values => {
        dispatch(handleAddCategory(values));
        dispatch(reset('addNewCategoryForm'));
    },
    onAddTask: values => {
        dispatch(handleAddTask(values));
        dispatch(reset('addNewTaskForm'));
    }
});

export default connect(null, mapDispatchToProps)(AddingBlock);
