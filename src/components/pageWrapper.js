import React from 'react'
import Grid from './grid'

const PageWrapper = ({ children }) => {
  return (
    <Grid
      gridTemplateRows="auto 1fr auto"
      minHeight="100vh"
      width={['85%', '75%']}
      margin="0 auto"
    >
      {children}
    </Grid>
  )
}

export default PageWrapper
