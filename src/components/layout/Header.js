import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import HelfoLogo from '../../style/img/logo.svg';
import { login } from '../../actions/authenticate';
import ProfileStatus from '../elements/ProfileStatus';

class Header extends React.Component {
    render() {
        return (<header>
            <div className="container">
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link className="navbar-item logo" to="/">
                            <img src={HelfoLogo} /><p style={{ paddingLeft: '12px' }}> Helseaktørportal.no</p>
                        </Link>
                        <ProfileStatus />
                    </div>
                </nav>
            </div>
        </header>);
    }
}

export default Header;