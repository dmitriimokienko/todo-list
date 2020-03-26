import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class HeaderFilter extends Component {
    handleClear = () => {
        const { reset, clearSearchInput } = this.props;

        reset();
        clearSearchInput();
    };

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="navbar-form navbar-right" method="get" action="#" role="search" onSubmit={handleSubmit}>
                <div className="col-xs-6">
                    <div className="input-group header-filter-input">
                        <Field
                            data-test="filter-field"
                            name="search"
                            component="input"
                            type="text"
                            className="form-control"
                            placeholder="Search for..."
                        />

                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.handleClear}>
                                X
                            </button>
                        </span>
                    </div>
                </div>
            </form>
        );
    }
}

HeaderFilter = reduxForm({
    form: 'filterForm'
})(HeaderFilter);

export default HeaderFilter;
