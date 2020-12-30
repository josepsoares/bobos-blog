import styled from 'styled-components'
import { space } from 'styled-system'

const IconButton = styled.button(
  props => ({
    cursor: 'pointer',
    background: 'transparent',
    transition: 'all 0.2s ease-in-out',
    color: `${props.theme.colors.text}`,
    borderBottom: 'dotted 2px',
    borderColor: props.theme.colors.primary,
    zIndex: 1,
    position: 'relative',
    padding: '0.25rem',
    '&:hover': {
      borderColor: props.theme.colors.secondary,
      color: props.theme.colors.background
    },
    '&:after, &:before': {
      transition: 'all 0.5s ease-in-out'
    },
    '&:after': {
      background: `linear-gradient(20deg, ${props.theme.colors.secondary} 0%, ${props.theme.colors.primary} 100%)`,
      borderRadius: '4px',
      display: 'block',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      top: '48%',
      left: '50%',
      width: '94%',
      height: 1,
      content: '"."',
      color: 'transparent',
      visibility: 'none',
      opacity: 0,
      zIndex: -1
    },
    '&:hover:after': {
      opacity: 1,
      visibility: 'visible',
      height: '100%'
    },
    '&:focus': {
      boxShadow: 'rgba(225, 200, 66, 0.6) 0px 0px 0px 2px'
    }
  }),
  space
)

export default IconButton
