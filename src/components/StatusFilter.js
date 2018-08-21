import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { setStatusFilter } from '../action_creators/todosActionCreators'

class StatusFilter extends Component {
  button = text => {
    const { filter, setStatusFilter } = this.props

    if (filter !== text) {
      return (
        <Button
          onClick={() => {
            setStatusFilter(text)
          }}
        >
          {text}
        </Button>
      )
    }
    return <Button disabled>{text}</Button>
  }

  render() {
    return (
      <div>
        {this.button('All')}
        {this.button('Completed')}
        {this.button('Open')}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filter: state.statusFilter,
})

const mapDispatchToProps = {
  setStatusFilter,
}

StatusFilter.propTypes = {
  filter: PropTypes.string,
  setStatusFilter: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusFilter)
