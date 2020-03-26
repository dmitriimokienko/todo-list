import React from 'react';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import HeaderLogo from '../HeaderLogo';
import HeaderFilter from '../HeaderFilter';
import ProgressBar from '../ProgressBar';
import AddingBlock from '../AddingBlock';
import DoneFilter from '../DoneFilter';

class Header extends React.Component {
    handleSubmit = (values) => {
        const { history } = this.props;
        let filterValue = values.search || '';
        const query = queryString.parse(history.location.search);
        const isDone = query.isdone === 'true';
        let search = `isdone=${isDone}`;

        filterValue = filterValue.trim();
        if (filterValue.length > 2) {
            search = `filter=${filterValue}&isdone=${isDone}`;
        }

        history.push({
            pathname: history.location.pathname,
            search,
        });
    };

    handleClearSearchInput = () => {
        const { history } = this.props;
        const query = queryString.parse(history.location.search);
        const isDone = query.isdone === 'true';

        history.push({
            pathname: history.location.pathname,
            search: `isdone=${isDone}`,
        });
    };

    render() {
        return (
            <header className="todo-list-header">
                <nav className="navbar row">
                    <div className="todo-list-header todo-list-header__logo">
                        <HeaderLogo />
                    </div>

                    <div className="todo-list-header todo-list-header_filter">
                        <HeaderFilter onSubmit={this.handleSubmit} clearSearchInput={this.handleClearSearchInput} />
                        <DoneFilter />
                    </div>
                </nav>
                <ProgressBar />
                <div className="todo-list-header todo-list-header_add-block">
                    <AddingBlock />
                </div>
            </header>
        );
    }
}

export default withRouter(Header);
