import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router-dom';

const Guidelines = ({setAlert, register, user}) => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
    const { name, email, phone, password, passwordConfirm } = formData;

    // only accept numbers as input for the user's phone number
    const fitPhoneNum = phoneNum => {
        let newPhoneNum = '';
        for (let i = 0; i < Math.min(phoneNum.length, 12); i++) {
            if (i === 3 || i === 7) {
                newPhoneNum += ' '; 
            }
            const code = phoneNum.charCodeAt(i);
            if (code <= 57 && code >= 48) {
                newPhoneNum += phoneNum.charAt(i);
            }
        }
        return newPhoneNum;
    }

    const onChange = e => {
        if (e.target.name === 'phone') {
            e.target.value = fitPhoneNum(e.target.value);
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (name === '' || email === '' || password === '' || passwordConfirm === '') {
            setAlert('Please provide complete registration information', 'danger')
        } else if (password !== passwordConfirm) {
            setAlert('Please provide matching passwords', 'danger')
        } else {
            register({name, phone, email, password});
        }
    }

    if (user) {
        return <Redirect to="/processtext"/>
    }

    return (
        <div className="centering spacing">
            <div className="w-60">
                <p className="f1 fw7 color-green  mv0">
                Cite your sources
                </p>
                <p className="f3 fw3 color-black mv0">
                The more sources the better!
                </p>
                <p className="f1 fw7 color-green  mv0">
                Use credible studies
                </p>
                <p className="f3 fw3 color-black mv0">
                Make sure they follow the scientific method and are reasonably recent.
                </p>
                <p className="f1 fw7 color-green  mv0">
                Use our tools to create your article!
                </p>
                <p className="f3 fw3 color-black mv0">
                Using our tools, we can help prevent modification of photos and news.
                </p>
                <p className="f1 fw7 color-green  mv0">
                How do you get certified with our brand?
                </p>
                <p className="f3 fw3 color-black mv0">
                Provide us with proof that you followed most of the guidelines above.
                </p>
                
            </div>
        </div>
    )
}


export default Guidelines
