import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './<%= name %>.css';

class <%= name %> extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(<%= name %>);
