import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <div className="container">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item logo" to="/">
                        Helseaktørportal.no
                </Link>
                    <Link className="profile" to="/profil">
                        <i className="fas fa-user-circle fa-2x"></i> <p>Logg inn</p>
                    </Link>
                </div>
            </nav>
        </div>
    </header>
)

export default Header