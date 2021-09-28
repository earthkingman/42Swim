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

const Pagination = () => {
  return (
    <PageWrapper>
      <ArrowFront />
      <RowSBDiv>
        {range(10, 1).map((data) => (
          <Number number={data} active={false} key={data} />
        ))}
      </RowSBDiv>
      <ArrowBack />
    </PageWrapper>
  )
}

export default Pagination
