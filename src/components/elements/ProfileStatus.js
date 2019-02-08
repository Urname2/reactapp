import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, signOut } from '../../actions/authenticate';
import config from '../../config/config';
import { getProfile } from '../../actions/profile';

class ProfileStatus extends React.Component {

    componentWillMount() {
        this.props.dispatch(getProfile());
    }

    handleLogin(e) {
        e.preventDefault();
        this.props.dispatch(login());
    }

    handleSignout(e) {
        e.preventDefault();
        this.props.dispatch(signOut())
    }

    createLoginLink() {
        return `${config.backend}/api/login`;
    }

    createSignOutLink() {
        return `${config.backend}/api/signout`;
    }

    handleBtn() {
        if (!this.props.user.authenticated) {
            return (< a className="profile btn-nostyle" href={this.createLoginLink()} >
                <i className="fas fa-user-circle fa-2x"></i> <p>Logg inn</p>
            </a >);
        }

        return (< a className="profile btn-nostyle" href={this.createSignOutLink()} >
            <i className="fas fa-user-circle fa-2x"></i> <p>Logg out</p>
        </a >);
    }

    render() {
        return this.handleBtn();
    }
}

const mapStoreStateToProps = (store) => {
    return {
        user: store.user,
    };
};

export default connect(mapStoreStateToProps)(ProfileStatus);

ProfileStatus.propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func,
};