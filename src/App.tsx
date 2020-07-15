import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './container/Home';
import Product from './container/Product';

const App = () => {
  return (
    <div className="p-grid">
      <div className="p-col-12 App-header">
        <Header />
      </div>
      <div className="p-col-12 App-container">
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/products" exact>
            <Product/>
          </Route>
        </Switch>
      </div>
      <div className="p-col-12 App-footer">
        <Footer/>
      </div>
    </div>
  );
};

export default App;
