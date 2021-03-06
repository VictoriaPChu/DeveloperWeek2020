import React, {Fragment} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {connect} from 'react-redux';
import {logout} from '../actions/user';
import {withRouter} from 'react-router-dom';

const Navigation = ({logout, user, history}) => {
    const showLinks = () => {
        if (user) {
            return <Fragment>
                <Nav.Link href="/" className="text-white" onClick={e => {
                    e.preventDefault();
                    logout();
                }}>
                    <span className="green-hover">
                        Log Out
                    </span>
                </Nav.Link>
            </Fragment>
        }

        return <Fragment>
            <Nav.Link href="/about" className="text-white">
                <span className="green-hover">
                    About
                </span>
            </Nav.Link>
            <Nav.Link href="/guidelines" className="text-white">
                <span className="green-hover">
                    Guidelines
                </span>
            </Nav.Link>
            <Nav.Link href="/Tools" className="text-white">
                <span className="green-hover">
                    Tools
                </span>
            </Nav.Link>
            <Nav.Link href="/apply" className="text-white">
                <span className="green-hover">
                    Apply
                </span>
            </Nav.Link>

     </Fragment>
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand className="f3 fw7 ml4" href="/">
                    <span className="green-hover">
                          Fair News Certified
                    </span>
                </Navbar.Brand>
                <Nav className="ml-auto mr4">
                    {showLinks()}
                </Nav>
            </Navbar>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user.user
}); 

export default connect(mapStateToProps, {logout})(withRouter(Navigation));
