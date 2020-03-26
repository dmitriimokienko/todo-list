import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { handleAddCategory } from '../../actions/categories';

class AddModalForm extends Component {
    handleSubmitForm = values => {
        const { onAddNestedCategory, onClose } = this.props;

        onAddNestedCategory(values);
        onClose();
    };

    render() {
        const { error, handleSubmit } = this.props;

        return (
            <form method="post" action="#" onSubmit={handleSubmit(this.handleSubmitForm)}>
                <div className="form-group">
                    <div className="input-group">
                        <Field
                            name="name"
                            component="input"
                            type="text"
                            className="form-control"
                            placeholder="Enter nested category title"
                        />

                        <span className="input-group-btn">
                            <button className="btn btn-success" type="submit">
                                Save changes
                            </button>
                        </span>
                    </div>
                </div>

                {error && <p className="error-form">{error}</p>}
            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: {
            parentId: ownProps.parentId
        }
    };
};

const mapDispatchToProps = dispatch => ({
    onAddNestedCategory: values => {
        dispatch(handleAddCategory(values));
        dispatch(reset('addNestedCategoryForm'));
    }
});

AddModalForm = reduxForm({
    form: 'addNestedCategoryForm'
})(AddModalForm);

export default connect(mapStateToProps, mapDispatchToProps)(AddModalForm);
