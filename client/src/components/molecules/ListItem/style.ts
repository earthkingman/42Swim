import styled, { css } from 'styled-components'
import { ColumnSADiv, RowSBDiv } from '../../atoms/Div'
import Text from '../../atoms/Text'
import { default as T } from '../../atoms/Title'

export const ListBox = styled(RowSBDiv)`
  width: 100%;
  height: 182.46px;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`
export const Content = styled(ColumnSADiv)`
  width: 76%;
  height: 90%;
  align-items: flex-start;
`
export const Title = styled(T)`
  &:hover,
  &:focus {
    ${({ theme }) =>
      theme &&
      css`
        color: ${theme.color.lightblack};
        cursor: pointer;
      `};
  }
`
export const Desc = styled(Text)`
  overflow: hidden;
  white-space: wrap;
  font-weight: 100;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  max-height: 50px;
  line-height: 25px;
`
export const Time = styled(Text)`
  margin-right: 1rem;
`
export const Bottom = styled(RowSBDiv)`
  width: 100%;
`
export const Counter = styled(RowSBDiv)`
  width: 22%;
  height: 100%;
  padding: 0 1rem;
`
export const Check = styled(ColumnSADiv)`
  width: 10%;
  height: 100%;
`
