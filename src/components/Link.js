import React from 'react'
import PropTypes from 'prop-types'
import { Link as RRLink } from 'react-router-dom'
import styled from 'styled-components'

/* STYLES */
const StyledRRLink = styled(RRLink)`
  && {
    text-decoration: none;
  }
`

const StyledAnchor = styled.a`
  text-decoration: none;
`

/* PRESENTATION */
export default class Link extends React.Component {
  static propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { to, href } = nextProps
    if (to !== prevState.to || href !== prevState.href) {
      return {
        to,
        href,
        LinkComponent: to ? StyledRRLink : StyledAnchor,
      }
    }
  }

  state = {
    to: undefined,
    href: undefined,
    LinkComponent: null,
  }

  render() {
    const { to, href, children } = this.props
    const { LinkComponent } = this.state
    return (
      <LinkComponent to={to} href={href}>
        {children}
      </LinkComponent>
    )
  }
}
