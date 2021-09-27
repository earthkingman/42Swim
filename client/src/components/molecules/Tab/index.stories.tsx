import React, { useState } from 'react'
import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import Tab, { Props, TabItem } from './index'

export default {
  title: 'Molecules/Tab',
  component: Tab,
}

export const Default = (props: Props) => {
  const [menu, setMenu] = useState(0)

  const changeState = (menuIndex: number) => {
    setMenu(menuIndex)
  }

  return (
    <GlobalThemeProvider>
      <Tab {...props}>
        <TabItem
          active={menu === 0 ? true : false}
          onClick={() => changeState(0)}
        >
          menu1
        </TabItem>
        <TabItem
          active={menu === 1 ? true : false}
          onClick={() => changeState(1)}
        >
          menu2
        </TabItem>
        <TabItem
          active={menu === 2 ? true : false}
          onClick={() => changeState(2)}
        >
          menu3
        </TabItem>
        <TabItem
          active={menu === 3 ? true : false}
          onClick={() => changeState(3)}
        >
          menu4
        </TabItem>
      </Tab>
    </GlobalThemeProvider>
  )
}

export const Example = (props: Props) => {
  const [menu, setMenu] = useState(0)

  const changeState = (menuIndex: number) => {
    setMenu(menuIndex)
  }
  return (
    <GlobalThemeProvider>
      <Tab {...props}>
        <TabItem
          active={menu === 0 ? true : false}
          onClick={() => changeState(0)}
        >
          최신순
        </TabItem>
        <TabItem
          active={menu === 1 ? true : false}
          onClick={() => changeState(1)}
        >
          인기순
        </TabItem>
        <TabItem
          active={menu === 2 ? true : false}
          onClick={() => changeState(2)}
        >
          답변 필요
        </TabItem>
        <TabItem
          active={menu === 3 ? true : false}
          onClick={() => changeState(3)}
        >
          태그
        </TabItem>
      </Tab>
    </GlobalThemeProvider>
  )
}
