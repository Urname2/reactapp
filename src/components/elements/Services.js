import React from 'react'
import { Link } from 'react-router-dom'
import Service from './Service';
import { services } from '../../api/services';

const Services = (props) => (
    <section className="section is-fullwidth">
        <div className="bd-example">
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-three-quarters">
                                <ul className="services">
                                    {
                                        services.map((service, i) => {
                                            return (
                                                <Service
                                                    key={i}
                                                    name={service.name}
                                                    route={service.route}
                                                />);
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="column is-one-quarter">
                                <p>Her finner du flere tjenester som vi tilbyr gjennom portalen.</p>
                                <br />
                                <p>Den rettslige manns vei er besatt på alle sider av ulikhetene til de onde menns egoistiske og tyranni. Salig er han som hyrder de svake gjennom mørkets dale, i kjærlighetens velvilje og gode vilje</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
)

export default Services