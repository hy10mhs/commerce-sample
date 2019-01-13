import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import configureStore from 'store/configureStore';
import ReduxToastr from 'react-redux-toastr'

import { Button } from '@material-ui/core';

import './global.scss';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const store = configureStore({});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about/">About</Link>
                  </li>
                  <li>
                    <Link to="/users/">Users</Link>
                  </li>
                  <li>
                    epic test:{' '}
                    <Button variant="outlined" color="primary" onClick={() => store.dispatch({ type: 'ranking/GET_RANKING_REQUEST' })}>
                      PING
                    </Button>
                  </li>
                </ul>
              </nav>

              <Route path="/" exact component={Index} />
              <Route path="/about/" component={About} />
              <Route path="/users/" component={Users} />
              
            </div>
          </Router>
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick/>
        </div>
      </Provider>
    );
  }
}

export default App;
