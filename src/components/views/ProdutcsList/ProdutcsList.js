import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
      <div className={styles.container}>
       
        {birds.map(bird => (
          <Link key={bird.id} to={`/product/${bird.title}`}>
            <Card 
              key={bird.title} 
              src={bird.image} 
              title={bird.title} 
              id={bird.id} 
              price={bird.price}/>
          </Link>
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
