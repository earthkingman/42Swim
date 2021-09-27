import { TabWrapper, StyledTabItem } from './style'

export interface Props {
  children?: any
}

const Tab = ({ children, ...props }: Props) => {
  // 여기에 useState 를 사용해서 state 변경여부에 따라 변경컴포넌트를 바꾸어 주어야 한다.
  return <TabWrapper {...props}>{children}</TabWrapper>
}

export interface ItemProps {
  children?: any
  onClick?: any
  active?: boolean
}
export const TabItem = ({ active, children, onClick, ...props }: ItemProps) => {
  const activeStyle = {
    color: 'black',
    borderBottom: '3px solid black',
  }

  return (
    <StyledTabItem
      style={active ? activeStyle : undefined}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledTabItem>
  )
}

export default Tab
