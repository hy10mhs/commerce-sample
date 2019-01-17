import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import window from 'global/window';

import configureStore, { history } from 'store/configureStore';
import ReduxToastr from 'react-redux-toastr';

import { minWidth600px } from 'utils/matchMedia';

import TopNav from 'components/TopNav';
import BottomNav from 'components/BottomNav';

import Feed from 'containers/Feed';
import Store from 'containers/Store';
import Notice from 'containers/Notice';
import Setting from 'containers/Setting';

import './global.scss';

const store = configureStore();

const App = () => {
  const [openMenu, setOpenMenu] = useState(!minWidth600px());

  useEffect(() => {
    const listener = () => {
      if (minWidth600px()) setOpenMenu(false);
      else setOpenMenu(true);
    };
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  });

  const toggleOpenMenu = () => setOpenMenu(!openMenu);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="container">
          <TopNav
            openMenu={openMenu}
          />
          <Switch>
            <Route path="/feed" exact component={Feed} />
            <Route path="/store" exact component={Store} />
            <Route path="/notice" exact component={Notice} />
            <Route path="/setting" exact component={Setting} />
            <Redirect from="/" to="/feed" />
          </Switch>
          <BottomNav
            openMenu={openMenu}
            toggleOpenMenu={toggleOpenMenu}
          />
        </div>
      </ConnectedRouter>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </Provider>
  );
};

export default App;
