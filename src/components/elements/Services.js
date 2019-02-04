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
                                            return <Service key={i} name={service} />
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="column is-one-quarter">
                                Second column
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
)

export default Services