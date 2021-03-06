/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
/* eslint-enable no-unused-vars*/

import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import styles from './styles/';

const WelcomeJumbo = () => (
  <Jumbotron className={styles}>
    <h1>Welcome</h1>
    <p>
      {'See what you can do using the US Census API and CitySDK'}
    </p>
    <LinkContainer to={ { pathname: '/about/' } }>
      <Button bsStyle='primary'>
        {'Learn More'}
      </Button>
    </LinkContainer>
  </Jumbotron>
);
WelcomeJumbo.propTypes = {
};
export default WelcomeJumbo;
