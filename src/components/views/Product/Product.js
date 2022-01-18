import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Product.module.scss';
import { birds } from '../../../redux/initialState';
import { CardProduct } from '../../features/CardProduct/CardProduct';

const Component = ({className}) => {
  const id = useParams();
  const bird = birds.filter(bird => bird.title === id.id);
  console.log('filteredBird', bird[0].image);

  return (
    <div className={clsx(className, styles.root)}>
      <CardProduct title={bird[0].title} src={bird[0].image} price={bird[0].price}> </CardProduct>
    </div>
  );
};

Component.propTypes = {
  
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Product,
  // Container as Product,
  Component as ProductComponent,
};
