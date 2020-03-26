import React from 'react';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import HeaderLogo from '../HeaderLogo';
import HeaderFilter from '../HeaderFilter';
import ProgressBar from '../ProgressBar';
import AddingBlock from '../AddingBlock';
import DoneFilter from '../DoneFilter';

function Header({ history }) {
    const query = queryString.parse(history.location.search);
    const defaultSearchValue = `isdone=${query.isdone === 'true'}`;
    const pathname = history.location.pathname;

    const handleSubmit = ({ search = '' }) => {
        const filterValue = search.trim();
        const searchValue = filterValue.length > 2 ? `filter=${filterValue}&${defaultSearchValue}` : defaultSearchValue;
        history.push({ pathname, search: searchValue });
    };

    const handleClearSearchInput = () => {
        history.push({ pathname, search: defaultSearchValue });
    };

    return (
        <header className="todo-list-header">
            <nav className="navbar row">
                <div className="todo-list-header todo-list-header__logo">
                    <HeaderLogo />
                </div>
                <div className="todo-list-header todo-list-header_filter">
                    <HeaderFilter onSubmit={handleSubmit} clearSearchInput={handleClearSearchInput} />
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

export default withRouter(Header);
