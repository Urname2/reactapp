import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout';


import './style/app.scss'

class Index extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        )
    }
}

let Application = document.getElementById("app");

render(<Index />, Application);