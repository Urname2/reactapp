import React from 'react';
import Header from './Header';
import Router from './Router';
import Footer from './Footer';

class Layout extends React.Component {
    render() {
        return (<div>
            <Header />
            <Router />
            <Footer />
        </div>)
    }
}

export default Layout;