import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {processText, clearData} from '../actions/analysis';
import { setAlert } from '../actions/alerts';
import Report from './Report';
//import CustomChatbot from "./CustomChatbot";
//import Radar from 'radar-sdk-js';

//const publishableKey = 'prj_live_pk_3fd6e2f39a633f201f06e07b5e52cbe53826d5a1';

/*Radar.initialize(publishableKey);

    Radar.trackOnce(function(status, location, user, events) {
        // do something with status, location, user, events
        console.log(status);
        console.log(location);
        console.log(user);
        console.log(events);
    });
*/
const ProcessText = ({user, analysis, submitText, processText, setAlert, clearData}) => {

    const [text, setText] = useState('');  
    const [dismissButton, toggleDismiss] = useState(false);

    const onChange = e => {
        setText(e.target.value);
    }
    const clickEventHandler= textexplainingsad => {/*do stuff with it*/}
    const onSubmit = e => {
        e.preventDefault(); 
        if (text.trim() === '') {
            setAlert('Please provide non-empty text', 'danger');
        } else {

            processText(text, user.username);
            toggleDismiss(true);
            setText('');
        }
    }

    if (!user) {
        return <Redirect to="/"/>
    }

    return (
        <div className="centering spacing">
            <div className="w-60">
                <p className="f1 fw7 color-green  mv0">
                    Process Text
                </p>
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Enter the text to analyze</Form.Label>
                        <Form.Control name="text" type="text" as="textarea" placeholder="What did they say?" value={text} onChange={onChange} />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Submit
                    </Button>

                    {
                        analysis && dismissButton && (
                            <Button variant="secondary" type="submit" onClick={e => {
                                    toggleDismiss(false)
                                    clearData(); 
                                }} className="ml3">
                                Dismiss
                            </Button> 
                        )
                    }
                </Form>
                {
                    analysis && dismissButton && (
                        <Report text={submitText} analysis={analysis} user={user}/>
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.user, 
    analysis: state.analysis.analysis, 
    submitText: state.analysis.text
}); 

ProcessText.propTypes = {
    setAlert: PropTypes.func.isRequired,
    processText: PropTypes.func.isRequired, 
    clearData: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {processText, setAlert, clearData})(ProcessText);
