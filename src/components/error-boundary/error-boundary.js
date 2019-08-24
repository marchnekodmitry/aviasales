import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorIndicator from '../error-indicator';

class ErrorBoundary extends Component {
  render() {
    if (this.props.error) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}

const mapStateToProps = ({ error }) => {
  return { error };
};

export default connect(mapStateToProps)(ErrorBoundary);
