import { ColumnSBDiv } from '../../atoms/Div'
import Text from '../../atoms/Text'

export interface Props {
  name: string
  count: number
  color?: string
}

const SortCounter = ({ name, count, color, ...props }: Props) => {
  return (
    <ColumnSBDiv width="40px" height="60px" {...props}>
      <Text weight="bold" size="18" color={color}>
        {name}
      </Text>
      <Text weight="bold" size="18" color={color}>
        {count}
      </Text>
    </ColumnSBDiv>
  )
}

export default SortCounter
