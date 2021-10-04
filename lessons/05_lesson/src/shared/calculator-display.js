import React from 'react'
import {ThemeProvider} from 'emtoi'
import PropTypes from 'prop-types'
import AutoScalingText from './auto-scaling-text'
import {getFormattedValue} from './utils'

function CalculatorDisplay({value, ...props}) {
  const formattedValue = getFormattedValue(
    value,
    typeof window === 'undefined' ? 'en-US' : window.navigator.language,
  )

  return (
    <div
      {...props}
      id="calculator-display"
      css={{
        position: 'relative',
        color: 'white',
        background: '#1c191c',
        lineHeight: '130px',
        fontSize: '6em',
        flex: '2',
      }}
    >
      <AutoScalingText>{formattedValue}</AutoScalingText>
    </div>
  )
}

CalculatorDisplay.propTypes = {
  value: PropTypes.string.isRequired,
}

export default CalculatorDisplay
