import React, { Component } from 'react';
import Context from './Context';

export default (mapStateToProps, mapDispatchToProps) => Com => {
  class ConnectComponent extends Component {
    constructor() {
      super(...arguments);
      this.state = this.getOwnState();
    }
  
    componentDidMount() {
      this.props.context.store.subscribe(this.onChange);
    }
  
    onChange = () => {
      this.setState(this.getOwnState())
    }
  
    getOwnState = () => {
      return this.props.context.store.getState();
    }
  
    componentWillUnmount() {
      this.props.context.store.unsubscribe(this.onChange);
    }
  
    render() {
      const { context, ...otherProps } = this.props;
      return <Com {...this.props} {...mapDispatchToProps(context.store.dispatch, this.props)} {...mapStateToProps(this.state, otherProps)}></Com>
    }
  }

  return props => (
    <Context.Consumer>
      { val => <ConnectComponent context={val} {...props}></ConnectComponent>}
    </Context.Consumer>
  )
}
