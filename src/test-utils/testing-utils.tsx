import React, {FC, ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import { ThemeProvider } from 'styled-components';
import theme from '../components/AppTheme';
import '../fontawesome';


const AllTheProviders: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}