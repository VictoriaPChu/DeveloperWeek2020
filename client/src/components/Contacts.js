import React from 'react'
import Contact from './Contact'; 
import ContactForm from './ContactForm';
import {connect} from 'react-redux';

const Contacts = ({user}) => {
    return user && (
        <div className="centering spacing">
            <div className="w-60">
                <p className="f1 fw7 color-green  mv0">
                    Contacts
                </p>
                <ContactForm />
                <div className="center-wrap mh2">
                    {
                        user.contacts.map((contact, i) => (
                            <div className="mh2" key={i}>
                                <Contact contact={contact} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user.user
}); 

export default connect(mapStateToProps)(Contacts);
