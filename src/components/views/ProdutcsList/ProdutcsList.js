import React from 'react';
import PropTypes from 'prop-types';
import { birds } from '../../../redux/initialState';
import { Card } from '../../features/Card/Card';
import styles from './ProdutcsList.module.scss';
// import { StylesContext } from '@material-ui/styles';

// import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// import styles from './ProdutcsList.module.scss';;

const Component = ({ className, children }) => {
 
  return (
    <div>
      <h1>Birds</h1>
      <div className={styles.container}>
        {birds.map(bird => (
          <Card key={bird.id} src={bird.image} title={bird.title}/>
        ))}
      </div>
    </div>
   
  );
};

Component.propTypes = {
  children: PropTypes.node,
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
  Component as ProdutcsList,
  // Container as ProdutcsList,
  Component as ProdutcsListComponent,
};
