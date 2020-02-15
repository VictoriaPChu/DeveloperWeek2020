import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {addContact} from '../actions/user';
import {connect} from 'react-redux';

const ContactForm = ({user, addContact}) => {

    const [formData, setFormData] = useState({
        name: '', 
        email: '',
        phone: ''
    });
    const {name, email, phone} = formData; 

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
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData)
        addContact(formData, user.email);
        setFormData({name: '', email: '', phone: ''}); 
    }

    return (
        <Jumbotron className="pb3 pt3">
            <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="What's their name?" value={name} onChange={onChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control name="phone" type="text" placeholder="What's their phone number?" value={phone} onChange={onChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control name="email" type="text" placeholder="What's their email address?" value={email} onChange={onChange} />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Add Contact
                    </Button>
                </Form>
        </Jumbotron>
    )
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(mapStateToProps, {addContact})(ContactForm);
