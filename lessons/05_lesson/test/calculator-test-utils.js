import React from 'react'
import PropTypes from 'prop-types'
import {render as rtlRender} from '@testing-library/react'
import {ThemeProvider} from '@emotion/react'
import {dark} from '../src/themes'

function render(ui, options){
    return rtlRender(ui, {wrapper:Wrapper, ...options})
}

function Wrapper({children}) {
    return <ThemeProvider theme={dark}>{children}</ThemeProvider>
}

Wrapper.propTypes = {
    children: PropTypes,
}
export * from '@testing-library/react'
export { render }