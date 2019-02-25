import React from 'react'
import PropTypes from 'prop-types'
import MUIButton from '@material-ui/core/Button'

export default class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
  }

  render() {
    const { children, ...otherProps } = this.props
    return (
      <MUIButton variant="contained" {...otherProps}>
        {children}
      </MUIButton>
    )
  }
}
