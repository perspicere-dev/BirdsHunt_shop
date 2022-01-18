import React from 'react';
import PropTypes from 'prop-types';

import styles from './CardProduct.module.scss';

const Component = (props) => (
  <div className={styles.card}>
    <div className={styles.gallery}>
      <div className={styles.gallery1}>
        <img className={styles.photo1} src={props.src} alt='aaa'></img>
      </div>
      <div className={styles.gallery2}>
        <img className={styles.photo2} src={props.src} alt='aaa'></img>
        <img className={styles.photo3} src={props.src} alt='aaa'></img>
      </div>
    </div>
    <p>{props.title}</p>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string, 
  id: PropTypes.number,
};

export {
  Component as CardProduct,
  // Container as CardProduct,
  Component as CardProductComponent,
};

