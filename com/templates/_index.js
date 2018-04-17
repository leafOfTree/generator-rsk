import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './<%= name %>.css';

class <%= name %> extends React.Component {
  static propTypes = {
  }

  constructor() {}

  render() {
    return (
      <div className={s.container}>
      </div>
    )
  }
}

export default withStyles(s)(<%= name %>);
