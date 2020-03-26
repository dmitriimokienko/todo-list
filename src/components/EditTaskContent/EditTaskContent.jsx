import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CategoryList from '../CategoriesList';
import TaskForm from '../TaskForm';
import { handleEditTask } from '../../actions/tasks';

class EditTaskContent extends Component {
    handleSubmit = values => {
        const { onSaveChanges } = this.props;

        onSaveChanges(values);
        this.handleComeToHomePage();
    };

    handleComeToHomePage = () => this.props.history.push('/');

    render() {
        return (
            <main className="main-section row">
                <section className="col-xs-5 main-section main-section-left">
                    <CategoryList isMoveTask={true} />
                </section>

                <section className="col-xs-7 main-section main-section-right">
                    <TaskForm form="editForm" onSubmit={this.handleSubmit} handleCancel={this.handleComeToHomePage} />
                </section>
            </main>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSaveChanges: values => {
        dispatch(handleEditTask(values));
    }
});

export default withRouter(connect(null, mapDispatchToProps)(EditTaskContent));
