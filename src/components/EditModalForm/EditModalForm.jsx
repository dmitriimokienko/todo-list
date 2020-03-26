import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { handleChangeCategoryTitle } from '../../actions/categories';

class EditModalForm extends Component {
    handleSubmitForm = values => {
        const { onChangeCategoryTitle, onClose } = this.props;

        onChangeCategoryTitle(values);
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
                            placeholder="Enter new category title"
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
            id: ownProps.id
        }
    };
};

const mapDispatchToProps = dispatch => ({
    onChangeCategoryTitle: values => {
        dispatch(handleChangeCategoryTitle(values));
        dispatch(reset('editCategoryTitleForm'));
    }
});

EditModalForm = reduxForm({
    form: 'editCategoryTitleForm'
})(EditModalForm);

export default connect(mapStateToProps, mapDispatchToProps)(EditModalForm);
