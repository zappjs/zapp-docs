import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import thunk from 'redux-thunk';

import { createBrowserHistory } from 'history';
import { render } from 'react-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Switch, withRouter } from 'react-router';
import { routerMiddleware, routerReducer, syncHistoryWithStore } from 'react-router-redux';

// templates
import MainTemplate from './templates/main/Main';

import './App.sass';

const history = createBrowserHistory({ basename: '/' });
const router = routerMiddleware(history);

const store = createStore(
  combineReducers({
    routing: routerReducer,
  }),
  applyMiddleware(
    thunk,
    router
  )
);

class ScrollToTopComponent extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const ScrollToTop = withRouter(ScrollToTopComponent);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <ScrollToTop>
            <Helmet
              titleTemplate="%s | "
            />
            <MainTemplate>
              <Switch>
                <Route path="/" component={ HomePage } exact />
              </Switch>
            </MainTemplate>
          </ScrollToTop>
        </Router>
      </Provider>
    );
  }
}

export default App;
