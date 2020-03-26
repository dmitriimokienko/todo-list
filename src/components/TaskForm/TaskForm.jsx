import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTaskById } from '../../reselectors/tasks';
import { Field, reduxForm, initialize } from 'redux-form';

class TaskForm extends Component {
    constructor(props) {
        super(props);

        let { currentTask, initializeCurrentTask } = this.props;

        initializeCurrentTask(currentTask);
    }

    render() {
        const { error, handleSubmit, handleCancel } = this.props;

        return (
            <form action="#" method="post" onSubmit={handleSubmit}>
                <div className="form-group btn-group-edit-task">
                    <button
                        data-test="edit-task-btn-submit"
                        type="submit"
                        className="btn btn-primary btn-group-edit-task-save"
                    >
                        Save Changes
                    </button>
                    <button type="button" className="btn btn-danger" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
                {error && (
                    <p data-test="error-task" className="error-form">
                        {error}
                    </p>
                )}

                <div className="form-group">
                    <label>{'Task title'}</label>
                    <Field
                        data-test="edit-task-title"
                        name="name"
                        component="input"
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>
                        <Field data-test="edit-task-done" name="isDone" component="input" type="checkbox" />
                        {'Done'}
                    </label>
                </div>

                <div className="form-group">
                    <label>{'Description'}</label>
                    <Field
                        data-test="edit-task-description"
                        name="description"
                        component="textarea"
                        className="form-control edit-task-textarea"
                        rows="10"
                    />
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
    const task = getTaskById(state);

    return {
        currentTask: task,
        initialValues: {
            name: task.name,
            isDone: task.isDone,
            description: task.description
        }
    };
};

const mapDispatchToProps = dispatch => ({
    initializeCurrentTask: currentTask => {
        dispatch(initialize('editForm', currentTask));
    }
});

TaskForm = reduxForm({})(TaskForm);

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
