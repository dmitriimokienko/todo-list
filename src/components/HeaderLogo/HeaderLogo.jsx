import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLogo = () => (
    <Link to={'/'}>
        <span className="navbar-brand">To-Do List</span>
    </Link>
);

export default HeaderLogo;
