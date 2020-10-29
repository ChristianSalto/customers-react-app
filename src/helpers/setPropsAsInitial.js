import React, { Component } from 'react';


export const setPropsAsInitial = WrappedComponent => (
  class extends Component {
    render() {
      return <WrappedComponent {...this.props}
        enableReinitialize initialValues={this.props} />
    }
  }
);

