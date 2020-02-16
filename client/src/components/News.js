import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import {Redirect} from 'react-router-dom';

const News = ({setAlert, register, user}) => {



    return (
        <div className="centering spacing">
            <div className="w-60">
                <p className="f1 fw7 color-green  mv0">
                Here are some Fair News Certified articles.
                </p>
                <p className="f3 fw3 color-black mv0">
                </p>
                <div>
                <CardDeck>
  <Card>
    <Card.Img variant="top" src="http://placekitten.com/201/164" />
    <Card.Body>
        <Card.Text>
      Learn about a recent event near you. 
      </Card.Text>
      <Card.Text>
        References: 1 sources
      </Card.Text>
      <Card.Text>
        Studies found: 0 studies found 
      </Card.Text>
      <Card.Text>
        Methods found: 6 eyewitness/testimonials 
      </Card.Text>    </Card.Body>
    <Button variant="primary" size="lg" className="mh3 grow" href="https://abcnews4.com/news/crime-news/berkeley-county-crawl-hill-drive-triple-homicide-update-2020-1-24">
                            Go
    </Button>
    <Card.Footer>
      <small className="text-muted">Last updated 0 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Img variant="top" src="http://placekitten.com/208/160" />
    <Card.Body>
      <Card.Text>
        Learn about Universal Basic Income. 
      </Card.Text>
      <Card.Text>
        References: 4 sources
      </Card.Text>
      <Card.Text>
        Studies found: 1 metanalytical studies 
      </Card.Text>
      <Card.Text>
        Methods found: 11 longitudinal studies 
      </Card.Text>

    </Card.Body>
    <Button variant="primary" size="lg" className="mh3 grow" href="http://www.world-psi.org/sites/default/files/documents/research/en_ubi_full_report_2019.pdf">
                            Go
    </Button>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Img variant="top" src="http://placekitten.com/207/160" />
    <Card.Body>
      <Card.Text>
      Learn about novel coronavirus. 
      </Card.Text>
      <Card.Text>
        References: 3 sources
      </Card.Text>
      <Card.Text>
        Studies found: 0 studies found 
      </Card.Text>
      <Card.Text>
        Methods found: 11 reported references 
      </Card.Text>
    </Card.Body>
    <Button variant="primary" size="lg" className="mh3 grow" href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">
                            Go
    </Button>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
            </div>
        </div>
    )
}


export default News
