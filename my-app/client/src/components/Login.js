import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { setAlert } from '../actions/alerts';
import { connect } from 'react-redux';
import { login } from '../actions/user';
import { Redirect } from 'react-router-dom';

const Login = ({setAlert, login, user}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setAlert('Please provide complete login information', 'danger')
        } else {
            login({email, password}); 
        }
    }

    if (user) {
        return <Redirect to="/processtext"/>
    }

    return (
        <div className="centering spacing">
            <div className="w-60">
                <p className="f1 fw7 color-green mv0">
                    Log In
                </p>
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="What's your email?" defaultValue={email} onChange={onChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="What's your password?" defaultValue={password} onChange={onChange} />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user.user
}); 

export default connect(mapStateToProps, {setAlert, login})(Login);
