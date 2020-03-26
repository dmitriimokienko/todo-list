import React, { Component } from 'react';
import { withRouter } from 'react-router';
import queryString from 'query-string';

class DoneFilter extends Component {
    handleFilter = event => {
        const { history } = this.props;
        const isDone = event.target.checked;
        const query = queryString.parse(history.location.search);
        const filter = query.filter || '';
        const search = `filter=${filter}&isdone=${isDone}`;

        history.push({
            pathname: history.location.pathname,
            search
        });
    };

    render() {
        return (
            <label data-test="filter-checkbox" className="header-show-done pull-right">
                <input name="showDone" component="input" type="checkbox" onChange={this.handleFilter} />
                {'Show done'}
            </label>
        );
    }
}

export default withRouter(DoneFilter);
