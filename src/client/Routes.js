import React from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main';

export default () => {
  return (
    <div>
      <Route exact path="/" component={Main} />
    </div>
  )
}