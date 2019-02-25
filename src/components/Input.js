import React from 'react'
import PropTypes from 'prop-types'
import MUIInput from '@material-ui/core/Input'
import MUIInputLabel from '@material-ui/core/InputLabel'
import MUIFormHelperText from '@material-ui/core/FormHelperText'
import MUIFormControl from '@material-ui/core/FormControl'

export default class Input extends React.Component {
  static propTypes = {
    inputId: PropTypes.string.isRequired,
    helpTextId: PropTypes.string,
    helpText: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  onChange = event =>
    this.props.onChange && this.props.onChange(event.target.value)

  render() {
    const { inputId, helpTextId, helpText, label, value } = this.props
    return (
      <MUIFormControl aria-describedby={helpTextId}>
        {label && <MUIInputLabel htmlFor={inputId}>{label}</MUIInputLabel>}
        <MUIInput id={inputId} value={value} onChange={this.handleChange} />
        {helpText &&
          helpTextId && (
            <MUIFormHelperText id={helpTextId}>{helpText}</MUIFormHelperText>
          )}
      </MUIFormControl>
    )
  }
}
