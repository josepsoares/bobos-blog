import styled from 'styled-components'
import { flex, space, layout } from 'styled-system'

/* background-color: #fc9842;
background-image: linear-gradient(315deg, #fc9842 0%, #fe5f75 74%); */

const PostItem = styled.div`
  ${flex};
  ${space};
  ${layout};
  color: ${props => props.theme.colors.background};
  background-color: #fc9842;
  background-image: linear-gradient(
    to left,
    ${props => props.theme.colors.secondary} 0%,
    ${props => props.theme.colors.primary} 100%
  );
  box-shadow: ${props => props.theme.shadows.md};
  transition: 0.5s all ease-in;
  padding: 1rem;
  position: relative;
  top: 0px;

  &:hover,
  &:active {
    top: -10px;
  }

  &:focus {
    box-shadow: rgba(225, 200, 66, 0.6) 0px 0px 0px 2px;
  }

  a {
    color: ${props => props.theme.colors.background};
  }

  a:visited {
    color: ${props => props.theme.colors.background};
  }
`

export default PostItem
