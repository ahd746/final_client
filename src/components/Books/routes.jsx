import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './index';
import New from './New';
import Edit from './Edit';
import Destroy from './Destroy';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route exact path="/new" component={New}/>
      <Route exact path="/edit/:id" component={Edit}/>
      <Route exact path="/destroy/:id" component={Destroy}/>
    </Switch>
  );
}

export default Routes;