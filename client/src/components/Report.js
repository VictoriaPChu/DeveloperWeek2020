import React from 'react'
import PropTypes from 'prop-types'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Badge from 'react-bootstrap/Badge';

const Report = ({text, analysis, user}) => {
    return (
        <div className="mt3">
            <Jumbotron className="pb3 pt4">
                <div className="w-80">
                    <div className="center-spaced">
                        <p>
                            <strong className="color-green f3">Sender: </strong>
                            {user && user.username}
                        </p>
                        <p>
                            <strong className="color-green f3">Score: </strong>
                            {analysis.score}
                        </p>
                    </div>
                </div>
                <p>
                    <strong className="color-green f3">Message: </strong>
                    {text}
                </p>
                <p className="centering f1 mt4">
                    {analysis.score <= -0.40 ? 
                        <Badge pill variant="danger">Distressed</Badge> :
                        <Badge pill variant="success">Stable</Badge>
                    
                    } 
                </p>
            </Jumbotron>
        </div>
    )
}

Report.propTypes = {
    text: PropTypes.string.isRequired,
    analysis: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

export default Report; 
