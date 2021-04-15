import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {info} from '../../data/dataStore.js';
import PropTypes from 'prop-types';

const Info = () => (
  <Container>
    <Hero titleText={info.title} image={info.image} />
    {info.description}
  </Container>
);

Info.propTypes = {
  title: PropTypes.node,
  image: PropTypes.node,
  description: PropTypes.node,
};

export default Info;