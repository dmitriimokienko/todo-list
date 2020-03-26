import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddCategoryForm extends Component {
    render() {
        const { error, handleSubmit } = this.props;

        return (
            <form className="header-adding-block-category" method="post" action="#" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="input-group">
                        <Field
                            data-test="add-category-field"
                            name="name"
                            component="input"
                            type="text"
                            className="form-control"
                            placeholder="Enter category title"
                        />

                        <span className="input-group-btn">
                            <button data-test="add-category-btn" className="btn btn-default" type="submit">
                                Add
                            </button>
                        </span>
                    </div>
                </div>
                {error && (
                    <p data-error="empty-category-title" className="error-form">
                        {error}
                    </p>
                )}
            </form>
        );
    }
}

AddCategoryForm = reduxForm({
    form: 'addNewCategoryForm'
})(AddCategoryForm);

export default AddCategoryForm;
