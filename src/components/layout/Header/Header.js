import React from 'react';
// import PropTypes from 'prop-types';
import { Fragment } from 'react';
import styles from './Header.module.scss';
import HeaderCartButton from '../../features/HeaderCartButton/HeaderCartButton';
import { Link } from 'react-router-dom'; 
import { faFeather } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const Component = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <Link to='/produtcs' className={styles.title}>BirdsHunt</Link>
        <Link to='/'>
          <FontAwesomeIcon className={styles.icon}size='xl' icon={faFeather} />
        </Link>
        <HeaderCartButton />
      </header>
      
      
    </Fragment>
  );
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
