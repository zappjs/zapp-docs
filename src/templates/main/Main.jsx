import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import styles from './Main.sass';

class MainTemplate extends Component {
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    });
  }
  render() {
    return (
      <Fragment>
        <Fragment>{this.props.children}</Fragment>
      </Fragment>
    );
  }
}

export default MainTemplate;
