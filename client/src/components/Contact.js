import React from 'react'
import PropTypes from 'prop-types'
import AkshayPic from '../img/AkshayPic.png';
import VictoriaPic from '../img/VictoriaPic.png';
import RebeccaPic from '../img/RebeccaPic.png';
import EvanPic from '../img/EvanPic.png';
import ProfilePic from '../img/profile.png';

const Contact = ({contact}) => {

    const contactPic = (name) => {
        switch(name) {
            case 'Akshay Sathiya':
                return <img src={AkshayPic} width="200px" height="200px" className="br-100" alt=""/>
            case 'Victoria Chu':
                return <img src={VictoriaPic} width="200px" height="200px" className="br-100" alt=""/>
            case 'Evan Lohn':
                return <img src={EvanPic} width="200px" height="200px" className="br-100" alt=""/>
            case 'Rebecca Abraham':
                return <img src={RebeccaPic} width="200px" height="200px" className="br-100" alt=""/>
            default:
                return <img src={ProfilePic} width="200px" height="200px" className="br-100" alt="" />
        }
    }

    return (
        <div className="mh2">
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div className="tc">
                    {contactPic(contact.name)}
                    <h1 className="f4">{contact.name}</h1>
                    <hr className="mw3 bb bw1 b--black-10" />
                    <h1 className="f6">{contact.email}</h1>
                    <h1 className="f6">{contact.phone}</h1>
                </div>
            </article>
        </div>
    )
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact; 
