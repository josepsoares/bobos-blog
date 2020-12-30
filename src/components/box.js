import styled from 'styled-components'
import { space, color, layout, flexbox, typography } from 'styled-system'

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0
  },
  space,
  color,
  layout,
  flexbox,
  typography
)

export default Box
