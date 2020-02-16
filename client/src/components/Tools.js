import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router-dom';

const Tools = ({setAlert, register, user}) => {



    return (
        <div className="centering spacing">
            <div className="w-60">
                <p className="f1 fw7 color-green  mv0">
                Tools
                </p>
                <p className="f3 fw3 color-black mv0">
                Data Visualizer
                </p>
                <p className="f3 fw3 color-black mv0">
                A visualizer for data.
                </p>
                <p className="f1 fw7 color-green  mv0">
                </p>
                <p className="f2 fw3 color-black mv0">
                Conversation Visualizer
                </p>
                <p className="f3 fw3 color-black mv0">
                A feature that keeps track of debates and conversation, and visualizes it.
                </p>
                <p className="f1 fw7 color-green  mv0">
                </p>
                <p className="f2 fw3 color-black mv0">
                Interview verification tool
                </p>
                <p className="f3 fw3 color-black mv0">
                Using Yubikey, we authenticate interviewees and interviewers by their keys to ensure they are who they say they are. Then we send them over to our Agora based interview platform.
                </p>
                <p className="f1 fw7 color-green  mv0">
                </p>
                <p className="f2 fw3 color-black mv0">
                Photo verification tool
                </p>
                <p className="f3 fw3 color-black mv0">
                Using the Canon API, we allow photographers to take pictures on the go, and immediately upload them to the cloud, to make sure they don't modify anything.
                </p>
                <p className="f1 fw7 color-green  mv0">
                </p>
                <p className="f2 fw3 color-black mv0">
                Fact checker
                </p>
                
            </div>
        </div>
    )
}


export default Tools
