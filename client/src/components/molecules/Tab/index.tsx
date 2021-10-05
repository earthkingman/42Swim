import { TabWrapper, StyledTabItem } from './style'

export interface ItemProps {
  children?: any
  onTabClick?: any
  active?: boolean
}

export const TabItem = ({
  active,
  children,
  onTabClick,
  ...props
}: ItemProps) => {
  const activeStyle = {
    color: 'black',
    borderBottom: '3px solid black',
    '-webkit-transition': 'color 0.5s ease',
    '-moz-transition': 'color 0.5s ease',
    transition: 'color 0.5s ease',
  }

  return (
    <StyledTabItem
      style={active ? activeStyle : undefined}
      onClick={onTabClick}
      {...props}
    >
      {children}
    </StyledTabItem>
  )
}

export interface Props extends ItemProps {
  children?: any
}

const Tab = ({ children, ...props }: Props) => {
  // 여기에 useState 를 사용해서 state 변경여부에 따라 변경컴포넌트를 바꾸어 주어야 한다.
  return <TabWrapper {...props}>{children}</TabWrapper>
}
Tab.Item = TabItem

export default Tab
