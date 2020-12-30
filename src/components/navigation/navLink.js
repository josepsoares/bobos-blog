import styled from 'styled-components'

/* background-color: #f7b42c;
background-image: linear-gradient(315deg, #f7b42c 0%, #fc575e 74%); */

/*
mais claro
background-color: #fc9842;
background-image: linear-gradient(315deg, #fc9842 0%, #fe5f75 74%);

mais laranja
background-color: #d14545;
background-image: linear-gradient(316deg, #d14545 0%, #ff9933 74%);

mais vermelho
background-color: #ffd045;
background-image: linear-gradient(315deg, #ffd045 0%, #d14545 74%);

*/

const NavLink = styled.a(props => ({
  cursor: 'pointer',
  background: 'transparent',
  transition: 'all 0.2s ease-in-out',
  color: props.theme.colors.text,
  fontWeight: 400,
  borderBottom: 'dotted 2px',
  borderColor: props.theme.colors.primary,
  borderRadius: '0',
  height: '100%',
  position: 'relative',
  fontSize: '0.85rem',
  zIndex: 1,
  padding: '0.25rem 0.5rem',
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
  }
}))

export default NavLink
