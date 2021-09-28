import React from 'react'
import CircleBox from '../../atoms/CircleBox'
import { PageWrapper } from './style'

interface PNProps {
  number: number
  onClick?: any
  active: boolean
}
const Number = ({ number, active, onClick, ...props }: PNProps) => {
  return (
    <CircleBox
      onClick={onClick}
      size="sm"
      color={active ? 'yellow' : 'white'}
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
      <Number number={1} active={false} />
      {range(10, 1).map((data) => (
        <Number number={data + 1} active={false} key={data} />
      ))}
    </PageWrapper>
  )
}

export default Pagination
