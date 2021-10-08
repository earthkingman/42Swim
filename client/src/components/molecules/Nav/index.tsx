import { NavWrapper } from './style'

export interface Props {
  children?: any
}

const Nav = ({ children, ...props }: Props) => {
  return <NavWrapper {...props}>{children}</NavWrapper>
}

export default Nav
