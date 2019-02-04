import React from 'react'
import { Link } from 'react-router-dom'

const Service = (props) => (
    <li>
        <div className="service">
            <Link to="/">
                <div className="service-icon"><i class="fas fa-volleyball-ball fa-2x"></i></div>
                <div className="service-description">{props.name}</div>
            </Link>
        </div>
    </li>
)

export default Service