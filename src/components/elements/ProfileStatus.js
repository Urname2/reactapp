import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, signOut } from '../../actions/authenticate';

class ProfileStatus extends React.Component {
    handleLogin(e) {
        e.preventDefault();
        this.props.dispatch(login());
    }

    handleSignout(e) {
        e.preventDefault();
        this.props.dispatch(signOut())
    }

    // todo: husk config
    createLink(){
        return 'http://localhost:5000/api/login'
    }

    handleBtn() {
        if (!this.props.user.authenticated) {
            return (< a className="profile btn-nostyle" href={this.createLink()} >
                <i className="fas fa-user-circle fa-2x"></i> <p>Logg inn</p>
            </a >);
        }

        return (< button className="profile btn-nostyle" onClick={e => this.handleSignout(e)} >
            <i className="fas fa-user-circle fa-2x"></i> <p>Logg ut</p>
        </button >);
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