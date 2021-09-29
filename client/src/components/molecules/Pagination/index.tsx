import React from 'react'
import ArrowBack from '../../asset/icons/ArrowBack'
import ArrowFront from '../../asset/icons/ArrowFront'
import CircleBox from '../../atoms/CircleBox'
import { RowSBDiv } from '../../atoms/Div'
import { PageWrapper } from './style'

interface PNProps {
  number: number
  onClick?: any
  active: boolean
}
const Number = ({ number, active, onClick, ...props }: PNProps) => {
  const style = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
  return (
    <CircleBox
      onClick={onClick}
      size="sm"
      color={active ? 'yellow' : 'white'}
      style={style}
      {...props}
    >
      {number}
    </CircleBox>
  )
}

function range(size: number, start: number) {
  return Array(size)
    .fill(start)
    .map((x, y) => x + y)
}

export interface Props {
  page: number
  onFront: MouseEvent
  onBack: MouseEvent
}

const Pagination = ({ page, onFront, onBack, ...props }: Props) => {
  return (
    <PageWrapper {...props}>
      <ArrowFront onClick={onFront} />
      <RowSBDiv>
        {range(10, 1).map((data) => (
          <Number
            number={data}
            active={page === data ? true : false}
            key={data}
          />
        ))}
      </RowSBDiv>
      <ArrowBack onClick={onBack} />
    </PageWrapper>
  )
}

export default Pagination
