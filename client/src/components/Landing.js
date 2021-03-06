import React from 'react';
import Button from 'react-bootstrap/Button';

const Landing = props => {
    return (
        <div className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="f1 fw6">Fair News Certified</h1>
                    <p className="f3 fw5">
                        Encouraging Quality News in an Unregulated Market
                    </p>
                    <Button variant="primary" size="lg" className="mh3 grow" href="/news">
                            See our approved articles
                    </Button>
    
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing; 
