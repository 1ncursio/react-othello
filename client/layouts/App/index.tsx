import loadable from '@loadable/component';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Home = loadable(() => import('@pages/Home'));
const Header = loadable(() => import('@layouts/Header'));

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </>
);

export default App;
