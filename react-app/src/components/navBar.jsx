import React from 'react';

function NavBar(props) {
    const { totalCounters } = props;
    return (
        <nav className="navbar navbar-light bg-light">
            <p className="navbar-brand">
                Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </p>
        </nav>
    );
}

export default NavBar;