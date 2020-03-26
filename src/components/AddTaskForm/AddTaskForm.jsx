import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddTaskForm extends Component {
    render() {
        const { error, handleSubmit } = this.props;

        return (
            <form className="header-adding-block-task pull-right" method="post" action="#" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="input-group">
                        <Field
                            name="name"
                            component="input"
                            type="text"
                            className="form-control"
                            placeholder="Enter task title"
                        />

                        <span className="input-group-btn">
                            <button className="btn btn-default" type="submit">
                                Add
                            </button>
                        </span>
                    </div>
                </div>
                {error && <p className="error-form">{error}</p>}
            </form>
        );
    }
}

AddTaskForm = reduxForm({
    form: 'addNewTaskForm'
})(AddTaskForm);

export default AddTaskForm;
