import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {faq} from '../../data/dataStore.js';
import PropTypes from 'prop-types';

const FAQ = () => (
  <Container>
    <Hero titleText={faq.title} image={faq.image} />
    {faq.description}
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node,
  image: PropTypes.node,
  description: PropTypes.node,
};

export default FAQ;