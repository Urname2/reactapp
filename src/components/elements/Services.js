import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Service from './Service';
import { services } from '../../actions/services';

class Services extends React.Component {

    handleProfileInfo() {

        const user = this.props.user;

        if (user.authenticated) {
            return (<div className="column is-one-quarter">
                <p>Navn: {user.name}</p>
                <br />
                <p>Rolle: {user.role}</p>
                <br />
                <p>Brukernavn: {user.username}</p>
                <br />
                <p>Den rettslige manns vei er besatt på alle sider av ulikhetene til de onde menns egoistiske og tyranni. Salig er han som hyrder de svake gjennom mørkets dale, i kjærlighetens velvilje og gode vilje</p>
            </div>)
        }

        return null;
    }

    render() {
        return (
            <div className="container">
                <div className="columns transition">
                    <div className="column">
                        <ul className="services columns is-multiline">
                            {
                                services.map((service, i) => {
                                    return (
                                        <Service
                                            key={i}
                                            icon={service.icon}
                                            name={service.name}
                                            route={service.route}
                                            description={service.description}
                                        />);
                                })
                            }
                        </ul>
                    </div>
                    {this.handleProfileInfo()}
                </div>
            </div>
        );
    }
}

const mapStoreStateToProps = (store) => {
    return {
        user: store.user,
    };
};

Services.propTypes = {
    user: PropTypes.object,
};

export default connect(mapStoreStateToProps)(Services);