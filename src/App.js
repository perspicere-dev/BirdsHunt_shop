import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { ProdutcsList } from './components/views/ProdutcsList/ProdutcsList';
import { Product } from './components/views/Product/Product';
import { Cart } from './components/views/Cart/Cart';
import { Order } from './components/views/Order/Order';



const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <CssBaseline />
        <MainLayout>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/produtcs' component={ProdutcsList} />
            <Route exact path='/product/:id' component={Product} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/order' component={Order} />
          </Switch>
        </MainLayout>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
