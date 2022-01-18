import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

const Component = (props) => (
  <div className={styles.card}>
    <img className={styles.photo} src={props.src} alt='aaa'></img>
    <p>{props.title}</p>
    <span>price from: {props.price} smiles</span>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string, 
  id: PropTypes.number,
  price: PropTypes.number,
};

export {
  Component as Card,
  // Container as Card,
  Component as CardComponent,
};

