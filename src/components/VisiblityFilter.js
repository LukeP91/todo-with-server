import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { setVisiblityFilter } from '../store/reducers/filters/actions'

class VisibilityFilter extends Component {
  button = text => {
    const { filter, setVisiblityFilter } = this.props

    if (filter !== text) {
      return (
        <Button
          onClick={() => {
            setVisiblityFilter(text)
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
  filter: state.filters.visiblityFilter,
})

const mapDispatchToProps = {
  setVisiblityFilter,
}

VisibilityFilter.propTypes = {
  filter: PropTypes.string,
  setVisiblityFilter: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisibilityFilter)
