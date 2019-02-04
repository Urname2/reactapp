import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item logo" to="/">
                    Helseaktørportal.no
                </Link>
                <Link className="profile" to="/profile">
                <i className="fas fa-user-circle fa-2x"></i> <p>Logg inn</p>
                </Link>
            </div>
        </nav>
    </header>
)

export default Header